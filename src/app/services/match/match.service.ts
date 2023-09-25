import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import {Observable, firstValueFrom, lastValueFrom } from 'rxjs';


@Injectable({
providedIn: 'root'
})
export class MatchService {

public matchesRef: firebase.firestore.CollectionReference;
public matchLineupRef: firebase.firestore.CollectionReference;
public tryScorersRef: firebase.firestore.CollectionReference;
public penaltyScorersRef: firebase.firestore.CollectionReference;
public conversionScorersRef: firebase.firestore.CollectionReference;
public dropGoalScorersRef: firebase.firestore.CollectionReference;
public paragraphsRef: firebase.firestore.CollectionReference;

constructor() {
      this.matchesRef = firebase.firestore().collection('/matches');
   }

  getMatches (): firebase.firestore.Query {
        return this.matchesRef.orderBy("date","desc");
      }

  getMatch(matchId:string): firebase.firestore.DocumentReference {
         return this.matchesRef.doc(matchId);
    }

  getMatchLineup (matchId:string): firebase.firestore.Query {
       this.matchLineupRef = firebase.firestore().collection('/matches/' + matchId + '/lineup');
       return this.matchLineupRef.orderBy("number","asc");
    }

  getTryScorers (matchId:string): firebase.firestore.Query {
       this.tryScorersRef = firebase.firestore().collection('/matches/' + matchId + '/tries');
       return this.tryScorersRef.orderBy("name","asc");
    }

  getPenaltyScorers (matchId:string): firebase.firestore.Query {
       this.penaltyScorersRef = firebase.firestore().collection('/matches/' + matchId + '/penalties');
       return this.penaltyScorersRef.orderBy("name","asc");
    }

  getConversionScorers (matchId:string): firebase.firestore.Query {
       this.conversionScorersRef = firebase.firestore().collection('/matches/' + matchId + '/conversions');
       return this.conversionScorersRef.orderBy("name","asc");

    }

  getDropGoalScorers (matchId:string): firebase.firestore.Query {
       this.dropGoalScorersRef = firebase.firestore().collection('/matches/' + matchId + '/dropGoals');
       return this.dropGoalScorersRef.orderBy("name","asc");

    }
 getAllParagaraphs (matchId:string): firebase.firestore.Query {
       this.paragraphsRef = firebase.firestore().collection('/matches/' + matchId + '/paragraphs');
       return this.paragraphsRef;
    }

 createMatch(homeTeam: string, awayTeam: string , matchDate: Date, team: string, competition: string, venue: string): Promise<firebase.firestore.DocumentReference> {

      return this.matchesRef.add({
      home: homeTeam,
      homeScore: "",
      away: awayTeam,
      awayScore: "",
      date: new Date(matchDate),
      team: team,
      competition: competition,
      venue: venue,
    });
  }

 deleteMatch(matchId:string) {
      firebase.firestore().doc('matches/' + matchId).delete();
  }

}
