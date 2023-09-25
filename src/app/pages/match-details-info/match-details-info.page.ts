import { Component, OnInit } from '@angular/core';
import { MatchService } from './../../services/match/match.service';
import { HelperService } from './../../services/helper/helper.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-match-details-info',
  templateUrl: './match-details-info.page.html',
  styleUrls: ['./match-details-info.page.scss'],
})

export class MatchDetailsInfoPage implements OnInit {

 public currentMatchDetails: any = {};
 public matchReportParagraphs: Array<any>;
    
    constructor(private matchService: MatchService, 
                private helperService: HelperService, 
                private route: ActivatedRoute
                ) { }

  ngOnInit() {
    
    const matchId: string = this.route.snapshot.params['id'];
      
    this.returnMatchDetails(matchId);
    this.returnAllParagraphs(matchId);   
     }
    
    /*
     * Return Match Details
     */
    
   private async returnMatchDetails(matchId: string){     
        const matchDetailsSnapshot = await this.matchService.getMatch(matchId).get();
        this.currentMatchDetails = matchDetailsSnapshot.data();
        this.currentMatchDetails.id = matchDetailsSnapshot.id; 
    

   }
    
    private async returnAllParagraphs(matchId: string){
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
}