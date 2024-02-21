import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdvicesService {

  constructor(
    public toastr: ToastrService,
  ) { }

  public mostrarAlerta(message: string, type:boolean, data?: any) {
    if (type) {
      this.toastr.success(message, '¡Success!');
    } else {
      this.toastr.error(message, '¡An error has occurred!');
    }
  }
}
