import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importe o ReactiveFormsModule

import { ContatoComponent } from './contato.component';

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // Adicione o ReactiveFormsModule nos imports do módulo
  ],
  providers: [],
})
export class ContatoModule { }
