import { Component, OnInit } from '@angular/core';
import { MatchService } from './../../services/match/match.service';
import { HelperService } from './../../services/helper/helper.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-match-details-scorers',
  templateUrl: './match-details-scorers.page.html',
  styleUrls: ['./match-details-scorers.page.scss'],
})
export class MatchDetailsScorersPage implements OnInit {

  public currentMatchDetails: any = {};
  public lineup: Array<any>;
  public tryScorers: Array<any>;
  public penaltyScorers: Array<any>;
  public conversionScorers: Array<any>;
  public dropGoalScorers: Array<any>;
  public allPlayers: Array<any>;
  public matchReportParagraphs: Array<any>;
    
    constructor(private matchService: MatchService, 
                private helperService: HelperService, 
                private route: ActivatedRoute, 
                private router: Router) { }

  ngOnInit() {
    const matchId: string = this.route.snapshot.params['id'];
   
    this.returnTryScorers(matchId);
    this.returnPenaltyScorers(matchId);
    this.returnConversionScorers(matchId);
    this.returnDropGoalScorers(matchId);
     }
    


  /*
     * Return the Try scorers 
     */
    
    private async returnTryScorers(matchId: string){   
        const tryScorersSnapshot = await this.matchService.getTryScorers(matchId).get();
        this.tryScorers = [];
            tryScorersSnapshot.forEach(snap => {
                this.tryScorers.push({
                    id: snap.id,
                    name: snap.data().name,
                });
                return false;
            });
            
        /*
        * Sort the scorers into a more readable format
        */
        this.helperService.getSortedScorers(this.tryScorers);
        this.helperService.addCommasToArray(this.tryScorers);
        }
      
     /*
     * Return the Penalty scorers 
     */

    private async returnPenaltyScorers(matchId: string){ 
        const penaltyScorersSnapshot = await this.matchService.getPenaltyScorers(matchId).get();
        this.penaltyScorers = [];
            penaltyScorersSnapshot.forEach(snap => {
                this.penaltyScorers.push({
                    id: snap.id,
                    name: snap.data().name,
                });
                return false;
            });
            
        /*
        * Sort the scorers into a more readable format
        */
        this.helperService.getSortedScorers(this.penaltyScorers);
        this.helperService.addCommasToArray(this.penaltyScorers);
        } 
      
     /*
     * Return the Conversion scorers 
     */
     private async returnConversionScorers(matchId: string){
        const conversionScorersSnapshot = await this.matchService.getConversionScorers(matchId).get();
        this.conversionScorers = [];
            conversionScorersSnapshot.forEach(snap => {
                this.conversionScorers.push({
                    id: snap.id,
                    name: snap.data().name,
                    
                });
                return false;
            });
            
        /*
        * Sort the scorers into a more readable format
        */
        this.helperService.getSortedScorers(this.conversionScorers);
        this.helperService.addCommasToArray(this.conversionScorers); 
        }
      
     /*
     * Return the dropGoal scorers 
     */
     private async returnDropGoalScorers(matchId: string){
        const dropGoalScorersSnapshot = await this.matchService.getDropGoalScorers(matchId).get();
        this.dropGoalScorers = [];
            dropGoalScorersSnapshot.forEach(snap => {
                this.dropGoalScorers.push({
                    id: snap.id,
                    name: snap.data().name,
                });
                return false;
            });
            
        /*
        * Sort the scorers into a more readable format
        */
        this.helperService.getSortedScorers(this.dropGoalScorers);
        this.helperService.addCommasToArray(this.dropGoalScorers); 
        } 


}