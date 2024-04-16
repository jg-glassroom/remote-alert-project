import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { getAuth } from 'firebase/auth';

import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null | undefined>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  get isAuthenticated(): boolean {
    return this.afAuth.currentUser !== null;
  }

  async signUp(email: string, password: string, username: string, language: string, role: string): Promise<void> {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return await this.updateUserData({ displayName: username, uid: result.user!.uid, language: language, role: role });
    } catch (error) {
      console.error("An error occurred: ", error);
      throw error;
    }
  }

  async emailPasswordSignIn(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      const currentUser = getAuth().currentUser;
      if (!currentUser) throw new Error('User not logged in');

      const userDoc = this.afs.collection('user').doc(currentUser.uid).valueChanges();
      userDoc.pipe(first()).subscribe((user: any) => {
        if (user.googleAccessToken) {
          localStorage.setItem('googleAccessToken', user.googleAccessToken);
        }
        if (user.facebookAccessToken) {
          localStorage.setItem('facebookAccessToken', user.facebookAccessToken);
        }
      });
    } catch (error) {
      console.error("An error occurred: ", error);
      throw error;
    }
  }

  async signOut() {
    await this.afAuth.signOut();
    localStorage.clear();
    return this.router.navigate(['/']);
  }

  public updateUserData(user: any) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`user/${user.uid}`);
    let data = {
      uid: user.uid,
      displayName: user.displayName,
      language: "",
      role: "",
      emailUpdates: false
    };

    if (user.role) {
      data.role = user.role
    }

    if (user.language) {
      data.language = user.language
    }
    return userRef.set(data, { merge: true });
  }
}
