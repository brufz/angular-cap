import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent  {

  nome = "Bruna";
  dataNascimento = "1995-01-01";
  urlImagem = "/assets/k.jpg"

  mostrarDataNascimento(){
    alert(`A data de nascimento é: ${this.dataNascimento}`);
  }

 

 

}
