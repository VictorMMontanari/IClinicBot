import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importe o ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { ContatoComponent } from './contato.component';
import { FormsModule } from '@angular/forms';  // Importe o FormsModule aqui

@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Adicione o ReactiveFormsModule nos imports do módulo
    HttpClientModule,
    FormsModule
  ],
  providers: [],
})
export class ContatoModule { }
