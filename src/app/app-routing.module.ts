import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ClansComponent } from './modules/clans/clans.component';
import { TeamsComponent } from './modules/teams/teams.component';
import { VillagesComponent } from './modules/villages/villages.component';
import { AkatsukiComponent } from './modules/akatsuki/akatsuki.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'clans',
    component: ClansComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'villages',
    component: VillagesComponent
  },
  {
    path: 'akatsuki',
    component: AkatsukiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
