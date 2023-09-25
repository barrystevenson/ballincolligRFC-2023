import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import {Observable, firstValueFrom, lastValueFrom } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
      
  loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
    
  resetPassword(email:string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }
                                       
  logoutUser():Promise<void> {
    return firebase.auth().signOut();
  }

    
}
