import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';


import { Location } from '@angular/common';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[]=[];
  currentColor:Color;
  isActive=false;
  constructor(private colorService:ColorService,private location:Location) {  }
  ngOnInit(): void {
    this.getColors();
  }


  getColors(){
    this.colorService.getColors().subscribe(Response=>{
      this.colors=Response.data
    });
  }

  setCurrentColorNull(){
    this.isActive=true;
    this.setCurrentColorButton(this.currentColor);
   }
  setAllColorButton(){
    if(this.isActive==true){
    return "list-group-item active"
  }else{
    return "list-group-item"
  }
}
  setCurrentColor(color:Color){
    this.currentColor=color;
    this.isActive=false;
  }
  setCurrentColorButton(color:Color){
    if(color==this.currentColor  && this.isActive==false )
    {
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
