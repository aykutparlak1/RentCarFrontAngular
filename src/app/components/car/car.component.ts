import { Component, OnInit } from '@angular/core';
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
  constructor(private carService:CarService){}
  ngOnInit(): void {
  this.getCars();
  this.getCarsDetail();
  }
  getCars(){
    this.carService.getCars().subscribe(Response=>{
      this.cars=Response.data
    });
  }
  getCarsDetail(){
    this.carService.getCarsDetail().subscribe(Response=>{
      this.carDetails=Response.data
    });
    }
}