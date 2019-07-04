import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesModule } from './modules/heroes/heroes.module';
import { MessagesModule } from './modules/messages/messages.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { PageNotFoundModule } from './core/page-not-found/page-not-found.module';
import { HeaderModule } from './core/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHttpModule } from './core/http/app-http.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppHttpModule,
    AppRoutingModule,
    HeroesModule,
    MessagesModule,
    DashboardModule,
    AppRoutingModule,
    PageNotFoundModule,
    HeaderModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
