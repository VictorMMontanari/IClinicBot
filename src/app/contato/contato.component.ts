import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  contatoForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  ngOnInit(): void {}

  enviarMensagem() {
    if (this.contatoForm.valid) {
      const mensagem = this.contatoForm.value;
      console.log(mensagem); 
    } else {
      // Tratar erros de validação do formulário
    }
  }
}
