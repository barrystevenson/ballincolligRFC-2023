import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayersPage } from './players.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PlayersPageRoutingModule } from './players-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PlayersPageRoutingModule
  ],
  declarations: [PlayersPage]
})
export class PlayersPageModule {}
