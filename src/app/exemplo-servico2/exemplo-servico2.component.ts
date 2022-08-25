import { Component, OnInit } from '@angular/core';
import { LoggerServiceComponent } from '../logger-service/logger-service.component';

@Component({
  selector: 'app-exemplo-servico2',
  templateUrl: './exemplo-servico2.component.html',
  styleUrls: ['./exemplo-servico2.component.css']
})
export class ExemploServico2Component {
produto = "";

constructor(public logger: LoggerServiceComponent){}

adicionarProduto(){
  this.logger.logar(`O produto com a descricao ${this.produto} foi adicionado`);
}
 

}
