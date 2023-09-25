import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/user/auth.service';
import { Router } from '@angular/router';
import { MatchService } from '../../services/match/match.service';
import { AlertController } from '@ionic/angular';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {

  public matches: Array<any>;
  constructor(    private authService: AuthService,
                  private matchService: MatchService,
                  private alertCtrl: AlertController,
                  private router: Router,
                  private zone: NgZone) { }

   ionViewWillEnter() {
        this.ngOnInit();
    }
    
    ngOnInit() {
      
            this.matchService.getMatches().get().then(matchSnapshot => {
            this.matches= [];
            matchSnapshot.forEach(snap => {
                this.matches.push ({  
                id: snap.id,
                    date: snap.data().date,
                    team: snap.data().team,
                    home: snap.data().home,
                    away: snap.data().away,
                    homeScore: snap.data().homeScore,
                    awayScore: snap.data().awayScore,
                    competition: snap.data().competition,
                });
                return false;
                });                
       
        });   
  }

  logOut(): void {
    this.authService.logoutUser().then( () => {
    this.router.navigateByUrl('');
    });
  }
  

 async presentConfirmDeleteMatch(matchId: string, refresher: Event) {
    
     const alert = await this.alertCtrl.create({
      header: 'Confirm Delete Match Details',
      message: 'Are you sure you want to permanently delete this match? ',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            //Do nothing
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.matchService.deleteMatch(matchId);
            this.ionViewWillEnter();
          }
        }
      ]
    });

  await alert.present();
 }

}
