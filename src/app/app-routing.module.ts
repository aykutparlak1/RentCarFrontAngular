import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {
    path:"",pathMatch:"full",component:CarComponent
  },
  {
    path:"cars", component:CarComponent
  },
  {
    path:"cars/colorId/:colorId",component:CarComponent
  },
  {
    path:"cars/brandId/:brandId",component:CarComponent
  },{
    path:"cars/brandId/:brandId/colorId/:colorId",component:CarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
