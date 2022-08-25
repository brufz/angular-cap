import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger-service',
  templateUrl: './logger-service.component.html',
  styleUrls: ['./logger-service.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class LoggerServiceComponent {
  mensagens: string[] = [];
logar (mensagem: string){
console.log(mensagem);
this.mensagens.push(mensagem);
}

exibeTodosOsLogs(){
  console.log(this.mensagens);
}


}
