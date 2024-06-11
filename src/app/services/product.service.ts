import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL: string = 'https://mpca18b2fbccb2efa936.free.beeceptor.com/products';

  constructor(private httpclient:HttpClient) { }

  getProducts(): Observable<any> {
    return this.httpclient.get(this.API_URL).pipe(res => res);
  }

}
