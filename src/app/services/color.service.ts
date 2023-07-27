import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:7008/api/colors";
  getColors():Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
}
