import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HomeComponent } from './modules/home/home.component';
import { ClansComponent } from './modules/clans/clans.component';
import { TeamsComponent } from './modules/teams/teams.component';
import { VillagesComponent } from './modules/villages/villages.component';
import { AkatsukiComponent } from './modules/akatsuki/akatsuki.component';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HomeComponent,
    ClansComponent,
    TeamsComponent,
    VillagesComponent,
    AkatsukiComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
