import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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

  async signUp(email: string, password: string, username: string, language: string, role: string, emailUpdates: boolean): Promise<void> {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return await this.updateUserData({ displayName: username, photoURL: null, uid: result.user!.uid, language: language, role: role, emailUpdates: emailUpdates });
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
        localStorage.setItem('googleAccessToken', user.googleAccessToken);
      });
    } catch (error) {
      console.error("An error occurred: ", error);
      throw error;
    }
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  public updateUserData(user: any) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`user/${user.uid}`);
    let data = {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      language: "",
      role: "",
      emailUpdates: false
    };

    if (user.role) {
      data.role = user.role
    }

    if (user.role) {
      data.emailUpdates = user.emailUpdates
    }

    if (user.language) {
      data.language = user.language
    }
    return userRef.set(data, { merge: true });
  }
}
