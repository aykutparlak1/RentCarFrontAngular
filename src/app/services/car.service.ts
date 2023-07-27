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
  getCarsDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"/getallcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsDetailsByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl +"/getcarsdetailsbycolorid?id="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
  getCarsDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl +"/getcarsdetailsbybrandid?id="+brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
  getCarsDetailsBrandAndColorId(brandId:number,colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl +"/getcarsdetailsbycolorandbrandid?brandId="+brandId+"&colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
}
