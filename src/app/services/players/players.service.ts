import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {

public playersRef: firebase.firestore.CollectionReference;
public previousClubsRef: firebase.firestore.CollectionReference;
public playerByNameRef: firebase.firestore.CollectionReference;    
    
  constructor() { 
    this.playersRef = firebase.firestore().collection('/players');   
  }
    
    getPlayersList (): firebase.firestore.Query {
        return this.playersRef.orderBy("surname","asc");
         }

    
    getPlayerDetails(playerDetailsId: string): firebase.firestore.DocumentReference {
        return this.playersRef.doc(playerDetailsId);        
    }
    
     
    getPreviousClubs (playerId: string): firebase.firestore.Query {
       this.previousClubsRef = firebase.firestore().collection('/players/' + playerId + '/previousClubs');
       return this.previousClubsRef.orderBy("name","asc");
    }
}