import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContatoComponent } from './contato/contato.component';
import { PgPrincipalComponent } from './pg-principal/pg-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContatoComponent,
    PgPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
