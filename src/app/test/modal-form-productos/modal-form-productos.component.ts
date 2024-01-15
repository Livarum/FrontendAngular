

import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Product } from './products.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-modal-form-productos',
  templateUrl: './modal-form-productos.component.html',
  styleUrl: './modal-form-productos.component.css'
})
export class ModalFormProductosComponent implements OnInit {
    /**
   * Titulo que contendra el moda
   */
    public title :string = '';
    /**
     * Accion que se realizara
     */
    public accion :string = '';
    /**
     * variable para la creacion del formulario
     */
    public formModal: FormGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
      // Add other form controls as needed
    });
    /**
     * variable para regresar el evento
     */
    public event: EventEmitter<any> = new EventEmitter();
    /**
     * Variable para mostrar la alerta de errores
     */
    public mostrarError: boolean = false;
    /**
     * Variable para mostrar la alerta de errores
     */
    public mensajeError: string = '';
  
    /**
     * variable para mostrar el gif de cargando
     */
    public mostrar: boolean = true;
    /**
     * Variable para deshabilitar el boton una vez enviado el formulario
     */
    public disableBoton: boolean = false;
    /**
     * Informacion de la empresa enviada desde empresas component
     */
    private data: any;
  
    public constructor (
      public bsModalRef: BsModalRef,
      public formBuilder: FormBuilder,
      private ProductService: ProductsService,
    ){}



  ngOnInit(): void {
    this.crearForm();
  }

  

  /**
   * Funcion para crear el formulario
   * @returns form
   */
  /**
   * Funcion para crear el formulario
   * @returns form
   */
  public crearForm() {
    this.formModal = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
      // Add other form controls as needed
    });
  }

    /**
   * Funcion para cerrar el modal
   */
    public cerrarModal(): void {
      this.bsModalRef.hide();
    }

    /**
   * Funcion para enviar información para crear un
   * nuevo elemento
   */
  public create(event: any){

    this.mostrar = false;

    let datos = this.dataForm();
    this.mostrarError = false;
    this.mensajeError = "";
    event.target.disabled = true;

    this.ProductService.create(datos).subscribe(
      response => {
        this.event.emit(response);
        event.target.disabled = false;
      },
      error => {
        this.mostrar = true;
        this.mostrarError = true;
        this.mensajeError = error;
        event.target.disabled = false;
      }
    )
  }

  private dataForm(): Product {
    const product: Product = {
      name: this.formModal.controls['name'].value,
      description: this.formModal.controls['description'].value,
      price: this.formModal.controls['price'].value,
      // Add other fields as needed
    };
  
    if (this.accion === 'edit') {
      product.id = this.data.id;
    }
  
    return product;
  }

    /**
   * Funcion para enviar información para editar un
   * nuevo elemento
   */
    public edit(event: any) {
      let datos = this.dataForm();
      this.mostrarError = false;
      this.mensajeError = "";
      event.target.disabled = true;
      this.mostrar = false;
  
      this.ProductService.edit(datos, this.data.id).subscribe(
        response => {
          this.event.emit(response);
          event.target.disabled = false;
        },
        error => {
          this.mostrarError = true;
          this.mensajeError = error;
          this.mostrar = true;
          event.target.disabled = false;
        }
      )
    }
  

}
