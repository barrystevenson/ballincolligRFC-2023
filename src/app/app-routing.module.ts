
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'match-details',
    loadChildren: () => import('./pages/match-details/match-details.module').then( m => m.MatchDetailsPageModule)
  },
  {
    path: 'player-details/:id',
    loadChildren: () => import('./pages/player-details/player-details.module').then( m => m.PlayerDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./pages/admin-home/admin-home.module').then( m => m.AdminHomePageModule),
    canActivate: [AuthGuard]  
  },
  {
    path: 'new-match',
    loadChildren: () => import('./pages/new-match/new-match.module').then( m => m.NewMatchPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'edit-match/:id',
    loadChildren: () => import('./pages/edit-match/edit-match.module').then( m => m.EditMatchPageModule),
    canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}