import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ContatoService } from './contato.component.service';
import { Contato } from './contato.component.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  // contatoForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  ngOnInit(): void {}
  constructor(private contatoService: ContatoService) {}

  // enviarMensagem() {
  //   if (this.contatoForm.valid) {
  //     const mensagem = this.contatoForm.value;
  //     console.log(mensagem); 
  //   } else {
  //     // Tratar erros de validação do formulário
  //   }
  // }

  contato: Contato = {
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    mensagem: ''
  };

  onSubmit() {
    this.contato.telefone = String(this.contato.telefone);
    console.log('Dados enviados:', JSON.stringify(this.contato, null, 2));
    this.contatoService.addHero(this.contato).subscribe(
      {
        next: (response) => {
          alert("Contato enviado com sucesso")
        },
        error: (error) => {
          alert('Erro ao enviar contato')
          console.error('Erro:', error);
        }
      }
    )
  }
}
