import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  isChatVisible = false;
  isChatExpanded = false;
  userMessage = '';
  messages: { role: string; content: string }[] = [];
  sessionId: string | null = null;

  constructor(private http: HttpClient) {}

  toggleChat() {
    this.isChatVisible = !this.isChatVisible;
    if (this.isChatVisible) {
      this.isChatExpanded = true;
    }
  }

  sendMessage() {
    if (this.userMessage.trim() === '') return;

    this.messages.push({ role: 'Você', content: this.userMessage });

    const body = {
      mensagem_usuario: this.userMessage,
      session_id: this.sessionId
    };

    this.http.post<{ resposta: string, session_id: string }>('https://www.admmaster.com.br/api/chat', body)
      .subscribe(
        response => {

          if (!this.sessionId && response.session_id) {
            this.sessionId = response.session_id;
          }

          this.messages.push({ role: 'Bot', content: response.resposta });
        },
        error => {
          console.error('Erro:', error);
          this.messages.push({ role: 'Bot', content: 'Erro ao enviar a mensagem.' });
        }
      );

    this.userMessage = '';
  }

  toggleExpansion() {
    this.isChatExpanded = !this.isChatExpanded;
  }
}
