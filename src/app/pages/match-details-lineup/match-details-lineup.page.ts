import { Component, OnInit } from '@angular/core';
import { PlayersService } from './../../services/players/players.service';
import { MatchService } from './../../services/match/match.service';
import { HelperService } from './../../services/helper/helper.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-match-details-lineup',
  templateUrl: './match-details-lineup.page.html',
  styleUrls: ['./match-details-lineup.page.scss'],
})
export class MatchDetailsLineupPage implements OnInit {

public lineup: Array<any>;
public allPlayers: Array<any>;
    
      constructor(private playersService: PlayersService,
                  private matchService: MatchService,
                  private helperService: HelperService, 
                  private route: ActivatedRoute,
                  private router: Router
                   
                ) { }

  ngOnInit() {
      
       const matchId: string = this.route.snapshot.params['id'];
     
       this.returnMatchLineup(matchId);
       this.returnAllPlayers();

  }
    
     /*
     * Return the Match Lineup 
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
      * Get All Players
      */
      private async returnAllPlayers(){
        
          
        const playersSnapshot = await this.playersService.getPlayersList().get();      
        this.allPlayers = [];
          
          //Issue here - Fix next line
          playersSnapshot.forEach(snap => {
                this.allPlayers.push({
                    id: snap.id,
                    firstName: snap.data().firstName,
                    surname: snap.data().surname,
                 });
                return false;
                });
       
        }

 /*
 * Navigate to the details page of the specific player in the lineup clicked
 */
    
 navigateToPlayerDetails(firstName: String, surname: String, players: Array<any>)
    {   
        var playerId = this.getPlayerId(firstName, surname, players);
        if (playerId)
            {
            this.router.navigateByUrl('player-details/'+ playerId);
            }
    }
    
 /*
 * Get the Id of the player clicked on from their Name
 */
    
 getPlayerId(firstName: String, surname: String, players: Array<any>) : String {
        
        for (var i = 0; i < players.length; i++ ){
            if(players[i].surname == surname) {
                if(players[i].firstName == firstName)
                    {
                        return players[i].id                 
                    }
            }
        }    
    return "0";   
 }

}