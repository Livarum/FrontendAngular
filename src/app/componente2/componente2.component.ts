import { Component } from '@angular/core';

@Component({
  selector: 'componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})

export class Componente2Component {

  nombres: Array<string>;
  constructor(){
   
    this.nombres = ['Pedro', 'Juan', 'Arturo', 'Alex']
  }


}

