import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchDetailsLineupPage } from './match-details-lineup.page';

const routes: Routes = [
  {
    path: '',
    component: MatchDetailsLineupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchDetailsLineupPageRoutingModule {}
