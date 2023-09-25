import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatchDetailsScorersPageRoutingModule } from './match-details-scorers-routing.module';
import { MatchDetailsScorersPage } from './match-details-scorers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchDetailsScorersPageRoutingModule
  ],
  declarations: [MatchDetailsScorersPage]
})
export class MatchDetailsScorersPageModule {}
