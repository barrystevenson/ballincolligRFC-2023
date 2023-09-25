import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
{
path: 'tabs',
component: TabsPage,
children: [
{
path: 'fixtures',
loadChildren: () => import('../tab2/fixtures.module').then(m => m.FixturesPageModule)
      },
      {
        path: 'players',
        loadChildren: () => import('../tab3/players.module').then(m => m.PlayersPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/fixtures',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/fixtures',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
