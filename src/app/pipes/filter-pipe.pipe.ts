import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;
    args = args.toLocaleLowerCase();
    debugger;
    return value.filter(function(item:any){
      return JSON.stringify(item).toLocaleLowerCase().includes(args);
    });
    //return filterText?value.filter((p:CarDetail)=>p.carName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
//arraylarda map,filter
}
