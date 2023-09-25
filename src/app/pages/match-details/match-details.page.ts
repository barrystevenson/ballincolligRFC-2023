import { Component, OnInit } from '@angular/core';
import { MatchService } from './../../services/match/match.service';
import { HelperService } from './../../services/helper/helper.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.page.html',
  styleUrls: ['./match-details.page.scss'],
})
export class MatchDetailsPage{
    
    public currentMatchDetails: any = {};
    public lineup: Array<any>;
    public matchReportParagraphs: Array<any>;
    public tryScorers: Array<any>;
    public penaltyScorers: Array<any>;
    public dropGoalScorers: Array<any>;
    public conversionScorers: Array<any>;
    
    
    constructor(private matchService: MatchService, 
                private helperService: HelperService, 
                private route: ActivatedRoute
                ) { }

  ngOnInit() {
  
    
    const  matchId = this.route.snapshot.firstChild!.params['id'];  
      
    this.returnMatchDetails(matchId);
    this.returnMatchLineup(matchId);
    this.returnMatchReport(matchId);
    this.returnMatchScorers(matchId)   
  }
    
    /*
     * Return Match Details
     */
    
    private async returnMatchDetails(matchId: string){     
        const matchDetailsSnapshot = await this.matchService.getMatch(matchId).get();
        this.currentMatchDetails = matchDetailsSnapshot.data();
        this.currentMatchDetails.id = matchDetailsSnapshot.id; 
        }
    
    /*
     * Check if there is a Match Lineup 
     */ 
    private async returnMatchLineup(matchId: string){
        const matchLineupSnapshot = await this.matchService.getMatchLineup(matchId).get();
        
         this.lineup = [];
         matchLineupSnapshot.forEach(snap => {
                this.lineup.push({
                    id: snap.id,
                    number: snap.data().number,
                    firstName: snap.data().firstName,
                    surname: snap.data().surname,
                });
      
                return false;
            });
    
   
    }
    
    /*
     * Check if there is a Match Report 
     */ 
    private async returnMatchReport(matchId: string){
        const matchReportParagraphSnapshot = await this.matchService.getAllParagaraphs(matchId).get();
        
        this.matchReportParagraphs = [];
         matchReportParagraphSnapshot.forEach(snap => {
                this.matchReportParagraphs.push({
                    id: snap.id,
                    paragraph: snap.data().paragraph,
                });
                return false;
            });
    }
    
        /*
     * Check if there is a Match Report 
     */ 
    private async returnMatchScorers(matchId: string){
        const matchTryScorersSnapshot = await this.matchService.getTryScorers(matchId).get();
        const matchPenaltyScorersSnapshot = await this.matchService.getPenaltyScorers(matchId).get();
        const matchConversionScorersSnapshot = await this.matchService.getConversionScorers(matchId).get();
        const matchDropGoalScorersSnapshot = await this.matchService.getDropGoalScorers(matchId).get();
        
        
        
        this.tryScorers = [];  
        matchTryScorersSnapshot.forEach(snap => {
                this.tryScorers.push({
                    id: snap.id,
                    name: snap.data().name,
                });
                //return false;
            });
        
        this.penaltyScorers = [];  
        matchPenaltyScorersSnapshot.forEach(snap => {
                this.penaltyScorers.push({
                    id: snap.id,
                    name: snap.data().name,
                });
                //return false;
            });
        
        this.dropGoalScorers = [];  
        matchDropGoalScorersSnapshot.forEach(snap => {
                this.dropGoalScorers.push({
                    id: snap.id,
                    name: snap.data().name,
                });
                return false;
            });
    }
}