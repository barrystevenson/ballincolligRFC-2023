import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchDetailsScorersPage } from './match-details-scorers.page';

const routes: Routes = [
  {
    path: '',
    component: MatchDetailsScorersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchDetailsScorersPageRoutingModule {}
