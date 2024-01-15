// test.component.ts
import { Component, OnInit, TemplateRef } from '@angular/core';

import { ProductsService } from '../services/products.service';
/////
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalFormProductosComponent } from './modal-form-productos/modal-form-productos.component';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  dataProducts: any[] = [];
  editedProduct: any = {};
  public mostrar: boolean = false;

  constructor(private productService: ProductsService, public bsModalRe: BsModalRef,
    public modalService: BsModalService,) {}

  ngOnInit(): void {
    this.getAll();
  }

    /**
   * Función para crear un nuevo elemento
   */
    public create() {
      this.openModal([], 'create', 'Crear Cliente')
    }
  /**
   * Funcion para obtener todos los registros de empresas
   */
  public getAll(){
    this.productService.getAll().subscribe(
      response => {
        if (response.success) {
          this.dataProducts= response.data;
          this.mostrar = true;   
          console.log('Selected Product:', response.data);
        } else {
          console.log('Selected Product:', response.message, response.success);
        }
      }
    );
  }


  public edit(data: any) {
    this.openModal(data, 'edit', 'Editar Cliente');
  }

  /**
   * funcion para mostrar el modal con el formulario
   * @param data []: informacion del vehiculo
   * @param accion string: accion a realizar crear o editar
   * @param title :string titulo del modal
   */
  private openModal( data: any, accion: string, title: string){

    const initialState: ModalOptions = {
      initialState: {
        data: data,
        title: title,
        accion: accion
      },
      class: 'modal-lg'
    };
    this.bsModalRe = this.modalService.show(ModalFormProductosComponent,initialState );
    this.bsModalRe.content.closeBtnName = 'Close';

    this.bsModalRe.content.event.subscribe((res: any) => {
      this.mostrar = false;
      if (res.success) {
        this.bsModalRe.hide();
        this.getAll();
        //this.alertaService.mostrarAlerta(res.message, res.success)
      }else{
        //this.alertaService.mostrarAlerta(res.message, res.success, res.data)
      }
    });
  }

  public delete(productId: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.delete(productId).subscribe((response) => {
        if (response.success) {
          this.getAll();
          // You may display a success message if needed
        } else {
          // Handle the error and display a message
          console.log('Error deleting product:', response.message);
        }
      });
    }
  }
}
