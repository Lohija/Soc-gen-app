import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {
 
  transform(value: any, filteredstatus : string, status : string): any {
        if(value.length == 0 || filteredstatus == "")
           return value;  
        let resultaArray = [];
        for(let todo of value){
        if(todo[status] == filteredstatus) {
           resultaArray.push(todo);
          }
       }
       return resultaArray;
    }
}
