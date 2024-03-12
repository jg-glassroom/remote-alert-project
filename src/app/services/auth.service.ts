import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GoogleAuthProvider, signInWithPopup, getAuth, OAuthCredential } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of, firstValueFrom, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';


interface DV360Response {
  partners: any[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null | undefined>;
  public partners: any = null;
  private partnersSubject = new BehaviorSubject<any[]>([]);
  public partners$ = this.partnersSubject.asObservable();

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router, private http: HttpClient) { 
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

  async signUp(email: string, password: string, username: string): Promise<void> {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return await this.updateUserData({ displayName: username, email: email, photoURL: null, uid: result.user!.uid });
    } catch (error) {
      console.error("An error occurred: ", error);
      throw error;
    }
  }

  async emailPasswordSignIn(email: string, password: string) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.error("An error occurred: ", error);
      throw error;
    }
  }

  async googleSignin() {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/display-video');
    provider.addScope('https://www.googleapis.com/auth/dfareporting');
    provider.addScope('https://www.googleapis.com/auth/doubleclickbidmanager');
    provider.addScope('https://www.googleapis.com/auth/doubleclicksearch');
    
    const result = await signInWithPopup(getAuth(), provider);
    const credential = GoogleAuthProvider.credentialFromResult(result) as OAuthCredential;
    const token = credential.accessToken; 
    
    this.updateUserData(result.user, token);
    this.router.navigate(['/home']);
  }

  async signOut() {
    this.clearCache();
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData(user: any, accessToken?: any) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`user/${user.uid}`);
    let data = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      accessToken: null,
    };

    if (accessToken) {
      data.accessToken = accessToken
      localStorage.setItem('accessToken', accessToken);
      this.getDV360Advertisers()
    }
    return userRef.set(data, { merge: true });
  }

  async getIdToken(): Promise<string> {
    const user = await this.afAuth.currentUser;
    if (!user) throw new Error('User not logged in');
    return user.getIdToken();
  }

  async getDV360Advertisers(): Promise<any> {
    const cachedData = localStorage.getItem('partners');
    if (cachedData) {
      this.partners = JSON.parse(cachedData);
      this.partnersSubject.next(this.partners);
      return this.partners;
    }
  
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` };
    const response$ = this.http.get<DV360Response>('https://displayvideo.googleapis.com/v3/partners', { headers });
    const data = await firstValueFrom(response$);
  
    this.partners = data.partners;
    localStorage.setItem('partners', JSON.stringify(data.partners));
    this.partnersSubject.next(data.partners);
    return data.partners;
  } 

  clearCache() {
    this.partners = null;
    localStorage.removeItem('partners');
  }
}
