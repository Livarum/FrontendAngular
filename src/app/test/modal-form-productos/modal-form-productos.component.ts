

import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Product } from './products.model';
import { ProductsService } from '../../services/products.service';
import { AdvicesService } from '../../services/advices.service';

import { ToastrService } from 'ngx-toastr';

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
    
    public productForm: FormGroup = new FormGroup({});

    public constructor (
      public bsModalRef: BsModalRef,
      public formBuilder: FormBuilder,
      private productService: ProductsService,
      private advicesService: AdvicesService,
      private toastr: ToastrService,
    ){}



  ngOnInit(): void {
    this.createForm();
  }

  

  /**
   * Funcion para crear el formulario
   * @returns form
   */
  /**
   * Funcion para crear el formulario
   * @returns form
   */
  /**
   * Products form.
   */
  public createForm() {
    this.productForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]), // Updated pattern for decimal numbers
      provider_id: new FormControl(null, [Validators.required]),
      type_id: new FormControl(null, [Validators.required]),
      container_id: new FormControl(null, [Validators.required]),
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
    public createProduct() {
      this.mostrar = false; 
      if (this.productForm.valid) {
        const productData = this.dataFormProduct();
        this.productService.create(productData).subscribe(
          (response) => {
            console.log('Product created successfully:', response);
            this.advicesService.mostrarAlerta('Product created successfully', true);
            this.createForm();
            this.mostrar = true; // Show confirmation toast
            //this.createForm();
            // You can add further handling here, like showing a success message or redirecting
            
          },
          (error) => {
            console.error('Error creating product:', error);
            // Handle error appropriately, e.g., display error message to the user
            this.toastr.error('Error creating product. Please try again later.', 'Error');
          }
        );
      } else {
        console.log('Form is invalid.');
        // Display error messages to the user
        this.toastr.error('Please fill in all required fields.', 'Error');
      }
    }

    private dataFormProduct(){
      let datos = {
        name: this.productForm.controls['name'].value,
        description: this.productForm.controls['description'].value,
        price: this.productForm.controls['price'].value,
        provider_id: this.productForm.controls['provider_id'].value,
        type_id: this.productForm.controls['type_id'].value,
        container_id: this.productForm.controls['container_id'].value,
      };
      return datos;
    }

  

}
