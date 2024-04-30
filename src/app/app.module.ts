import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PgPrincipalComponent } from './pg-principal/pg-principal.component';
import { FooterComponent } from './footer/footer.component';
import { ContatoModule } from './contato/contato.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PgPrincipalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContatoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
