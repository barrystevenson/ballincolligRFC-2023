import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchDetailsPage } from './match-details.page';

const routes: Routes = [
  {
    path: '',
    component: MatchDetailsPage,
    children: [

      {
        path: 'match-details-info/:id',
        children: [
         {
            path: '',
            loadChildren: () => import('../match-details-info/match-details-info.module').then(m => m.MatchDetailsInfoPageModule)
          }
        ]
      },
      {
        path: 'match-details-lineup/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('../match-details-lineup/match-details-lineup.module').then(m => m.MatchDetailsLineupPageModule)
          }
        ]
      },
      {
        path: 'match-details-scorers/:id',
        children: [
          {
            path: '',
            loadChildren: () => import('../match-details-scorers/match-details-scorers.module').then(m => m.MatchDetailsScorersPageModule)
          }
        ]
      },

        
      {
        path: '',
        redirectTo: '/match-details/match-details-info/:id',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    //redirectTo: '/match-details/match-details-info/:id',
    redirectTo: '/match-details/match-details-info',
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchDetailsPageRoutingModule {}
