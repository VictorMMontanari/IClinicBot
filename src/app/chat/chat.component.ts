import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Message {
  role: string;
  content: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  isChatVisible = false;
  isChatExpanded = false; // Nova variável para controle de expansão
  userMessage = '';
  messages: { role: string; content: string }[] = [];

  constructor(private http: HttpClient) {}

  toggleChat() {
    this.isChatVisible = !this.isChatVisible;
    if (this.isChatVisible) {
      this.isChatExpanded = true; // Expande o chat ao abrir
    }
  }

  sendMessage() {
    if (this.userMessage.trim() === '') return;

    // Adiciona a mensagem do usuário à lista de mensagens
    this.messages.push({ role: 'Você', content: this.userMessage });

    // Faz a requisição POST para a API
    // this.http.post<{ resposta: string }>('http://localhost:5000/api/chat', {
    this.http.post<{ resposta: string }>('https://chatllama-tw11.onrender.com/api/chat', {
      mensagem_usuario: this.userMessage
    }).subscribe(
      response => {
        // Adiciona a resposta do bot à lista de mensagens
        this.messages.push({ role: 'Bot', content: response.resposta });
      },
      error => {
        console.error('Erro:', error);
        this.messages.push({ role: 'Bot', content: 'Erro ao enviar a mensagem.' });
      }
    );

    this.userMessage = '';
  }

  // Método para alternar a altura do chat
  toggleExpansion() {
    this.isChatExpanded = !this.isChatExpanded; // Altera o estado de expansão
  }
}
