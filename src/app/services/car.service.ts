import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:7008/api/cars";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsDetail():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"/getallcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
