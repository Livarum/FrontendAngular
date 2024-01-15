import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponseProduct, Product } from '../test/modal-form-productos/products.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Adjust the port if needed

  constructor(private http: HttpClient) {}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  /**
   * Function to get all records
   * @returns
   */
  public getAll(): Observable<ResponseProduct> {
    return this.http.get<ResponseProduct>(`${this.apiUrl}/products`);
  } 



  /**
   * Function to create a new record
   * @returns
   */
  public create(data: Product): Observable<ResponseProduct> {
    return this.http.post<ResponseProduct>(`${this.apiUrl}/products`, data);
  }

  /**
   * Function to edit a record
   * @returns
   */
  public edit(data: Product, id: number): Observable<ResponseProduct> {
    return this.http.put<ResponseProduct>(`${this.apiUrl}/products/${id}`, data);
  }

  /**
   * Function to delete a record
   * @returns
   */
  public delete(id: number): Observable<ResponseProduct> {
    return this.http.delete<ResponseProduct>(`${this.apiUrl}/products/${id}`);
  }


}
