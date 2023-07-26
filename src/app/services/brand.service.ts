import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:7008/api/brands";
  constructor(private httpClient:HttpClient) { }
  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
