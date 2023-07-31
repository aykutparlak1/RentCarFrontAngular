import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  constructor(private brandService:BrandService) {}
  brands:Brand[]=[];
  currentBrand:Brand;
  brandId:number
  isActive=false;
  ngOnInit(): void { 
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(Response=>{
      this.brands=Response.data
    });
    }
    setCurrentBrandNull(){
      this.isActive=true;
      this.setCurrentBrandButton(this.currentBrand);
     }
    setAllBrandButton(){
      if(this.isActive==true){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
    setCurrentBrand(brand:Brand){
      this.currentBrand=brand;
      this.isActive=false;
    }
    setCurrentBrandButton(brand:Brand){
      if(brand==this.currentBrand  && this.isActive==false )
      {
        return "list-group-item active"
      }else{
        return "list-group-item"
      }
    }
    handleKeyup(event: any): void{ 
      this.brandId = event.target.value;
      console.log(event);
  }
    @Output() selectedBrand = new EventEmitter<any>();
      selectBrand(value: any) {
      this.selectedBrand.emit(value);
    }
}
