import { Component, OnInit } from '@angular/core';
import { LoggerServiceComponent } from '../logger-service/logger-service.component';

@Component({
  selector: 'app-exemplo-servico',
  templateUrl: './exemplo-servico.component.html',
  styleUrls: ['./exemplo-servico.component.css']
})
export class ExemploServicoComponent {
nome = "";

constructor(private logger: LoggerServiceComponent){}

adicionarNome(){
  this.logger.logar(`O nome ${this.nome} foi adicionado`);
}




}
