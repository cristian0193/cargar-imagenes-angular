import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Datos } from '../models/Datos';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CargarImagenService {
headers: HttpHeaders = new HttpHeaders({
  "Content-Type": "application/json"
});

  urlCreate: string = 'http://localhost:3000/product/create';
  urlConsult: string = 'http://localhost:3000/product/items';

  constructor(private http: HttpClient) { }

  insertData(data: Datos){
    return this.http.post(this.urlCreate, data, { headers: this.headers });
  }

  consultarItems(){
    return this.http.get(this.urlConsult, { headers: this.headers });
  }

}


