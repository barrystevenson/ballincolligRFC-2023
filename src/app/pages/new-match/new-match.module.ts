import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewMatchPageRoutingModule } from './new-match-routing.module';
import { NewMatchPage } from './new-match.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewMatchPageRoutingModule
  ],
  declarations: [NewMatchPage]
})
export class NewMatchPageModule {}
