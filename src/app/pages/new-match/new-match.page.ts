import { FormGroup, Validators, FormBuilder, ReactiveFormsModule, FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../../services/match/match.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.page.html',
  styleUrls: ['./new-match.page.scss'],
})
export class NewMatchPage implements OnInit {

    public homeTeam: any;
    public awayTeam: any;
    public team: any;
    public competition: any;
    public venue: any;
    public matchDate: any;
    
  constructor(private router: Router, private matchService: MatchService, private formBuilder: FormBuilder) { 
  }

  ngOnInit() {
  }
    
  createMatch( homeTeam: string, awayTeam: string, matchDate: Date, team: string, competition: string, venue: string): void {
      if (
        homeTeam === undefined ||
        awayTeam === undefined ||
        team === undefined ||
        competition === undefined ||
        venue === undefined || 
        matchDate === undefined 
      ) {
        return;
      }
      this.matchService
        .createMatch(homeTeam, awayTeam, matchDate, team, competition, venue, )
        .then(() => {
          this.router.navigateByUrl('admin-home');
        });
    }
    
}
