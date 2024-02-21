// test.component.ts
import { Component, OnInit, TemplateRef } from '@angular/core';

import { ProductsService } from '../services/products.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

import { AdvicesService } from '../services/advices.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalFormProductosComponent } from './modal-form-productos/modal-form-productos.component';; // Replace 'path-to-modal-form-productos-component' with the actual path to your modal component file
import { dataTable } from '../../environments/dataTables';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})

export class TestComponent implements OnInit {

  public dataProducts: any[] = [];
    /**
   * Opciones de datatables
   */
  public dtOptions = dataTable.options;


  constructor(
    private productService: ProductsService,
    private advicesService: AdvicesService, // Inject AdvicesService
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private modalService: BsModalService,
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  
  openModal() {
    this.bsModalRef = this.modalService.show(ModalFormProductosComponent, {
      initialState: {}
    });
  }

  public getAll(){
    this.productService.getAll().subscribe(
      response => {
        if (response.success) {
          this.dataProducts = response.data;
          console.log('Products:', this.dataProducts);  
        } else {
          this.advicesService.mostrarAlerta(response.message, response.success);
        }
      }
    );
  }
}
