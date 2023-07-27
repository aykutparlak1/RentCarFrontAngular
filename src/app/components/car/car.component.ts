import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  cars:Car[]=[];
  carDetails:CarDetail[]=[];
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getCarsDetailsByColorId(params["colorId"]);
      }else if(params["brandId"]){
        this.getCarsDetailsByBrandId(params["brandId"]);
      }else if(params["brandId"] && params["colorId"]){
        this.getCarsDetailsBrandAndColorId(params["brandId"],params["colorId"]);
      }else{
        this.getCarsDetails();
      }
    });;
  }
  getCars(){
    this.carService.getCars().subscribe(Response=>{
      this.cars=Response.data
    });
  }
  getCarsDetails(){
    this.carService.getCarsDetails().subscribe(Response=>{
      this.carDetails=Response.data
    });
    }

    getCarsDetailsByColorId(colorId:number){
      this.carService.getCarsDetailsByColorId(colorId).subscribe(Response=>{
        this.carDetails=Response.data
      });
    }
    getCarsDetailsByBrandId(brandId:number){
      this.carService.getCarsDetailsByBrandId(brandId).subscribe(Response=>{
        this.carDetails=Response.data
      });
    }
    getCarsDetailsBrandAndColorId(brandId:number,colorId:number){
      this.carService.getCarsDetailsBrandAndColorId(brandId,colorId).subscribe(Response=>{
        this.carDetails=Response.data
      });
    }

}
