import { Component, OnInit } from '@angular/core';
import { PlayersService } from './../../services/players/players.service';
import { HelperService } from './../../services/helper/helper.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],

})
export class PlayerDetailsPage implements OnInit {
  
  public currentPlayerDetails: any = {};
  public previousClubs: Array<any>;
 
    constructor(private playersService: PlayersService,
                private helperService: HelperService, 
                private route: ActivatedRoute, 
                private location: Location) { }

 ngOnInit() {
    
    const playerId: string = this.route.snapshot.params['id'];
     
     this.returnPlayerDetails(playerId);
     this.returnPreviousClubs(playerId);
     }
       
    private async returnPlayerDetails(playerId: string){
        const playerDetailsSnapshot = await this.playersService.getPlayerDetails(playerId).get();
        this.currentPlayerDetails = playerDetailsSnapshot.data();
        this.currentPlayerDetails.id = playerDetailsSnapshot.id; 
    }
    
    private async returnPreviousClubs(playerId: string){
        const previousClubsSnapshot = await this.playersService.getPreviousClubs(playerId).get();
        this.previousClubs = [];
         previousClubsSnapshot.forEach(snap => {
                this.previousClubs.push({
                    id: snap.id,
                    name: snap.data().name,
                });
                return false;
            });
             this.helperService.addCommasToArray(this.previousClubs);   
    }
    
    goBack() {
    this.location.back();
  }
    
    
}
