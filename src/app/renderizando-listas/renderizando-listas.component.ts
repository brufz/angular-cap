import { Xliff } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent  {

  celulares: Celular[] = [
    {id: 1, nome: "celular XL", descricao: "Um celular muito bom", esgotado: false},
    {id: 2, nome: "celular samsung", esgotado: false},
    {id: 3, nome: "Iphone XS", esgotado: true}
  ]

}
