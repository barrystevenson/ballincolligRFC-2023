import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatchDetailsLineupPageRoutingModule } from './match-details-lineup-routing.module';
import { MatchDetailsLineupPage } from './match-details-lineup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchDetailsLineupPageRoutingModule
  ],
  declarations: [MatchDetailsLineupPage]
})
export class MatchDetailsLineupPageModule {}
