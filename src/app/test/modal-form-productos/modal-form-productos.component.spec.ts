import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormProductosComponent } from './modal-form-productos.component';

describe('ModalFormProductosComponent', () => {
  let component: ModalFormProductosComponent;
  let fixture: ComponentFixture<ModalFormProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFormProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFormProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
