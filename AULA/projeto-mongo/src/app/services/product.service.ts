import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = "https://localhost:3000/product";

  constructor(private httpClient:HttpClient) { }

  register(prod:Product){
    //return this.httpClient.post(this.url,prod); //json-server  
    return this.httpClient.post(`${this.url}/register`,prod);//express e mongo
  }

  list(){
    //return this.httpClient.get(this.url); //json-server
    return this.httpClient.get(`${this.url}/list`);//express e mongo
  }

  delete(id:number){
    //return this.httpClient.delete(`${this.url}/${id}`); //json-server
    return this.httpClient.delete(`${this.url}/delete/${id}`); //express e mongo
  }

  retrieveById(id:number){
    //return this.httpClient.get(`${this.url}/${id}`); //json-server
    return this.httpClient.get(`${this.url}/retrieve/${id}`);// express e mongo
  }

  update(prod:Product){
    //return this.httpClient.put(`${this.url}/${prod.id}`,prod); //json-server
    //return this.httpClient.put(`${this.url}/update/${prod.id}`,prod); //express
    return this.httpClient.put(`${this.url}/update/${prod._id}`,prod); //mongo
  }
}
