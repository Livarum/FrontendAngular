import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  edad: number;
  nombres: Array<string>;
  constructor(){
    this.edad =19;
    this.nombres = ['Pedro', 'Juan', 'Arturo', 'Alex']
  }

  aumentarEdad(){
    this.edad = this.edad +1;
    console.log("Aumentar")
  }

  bajarEdad(){
    this.edad--;
    console.log("Disminuir")
  }
}
/* export class Componente1Component implements OnInit{
  edad: number;
  constructor(){
    this.edad =18;
  }
  ngOnInit(): void {
      alert('Componente 1 Cargadado')
  }
}
 */
