import {NgModule} from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import {CommonModule} from '@angular/common'

@NgModule({
    imports : [CommonModule],
    declarations:[EmployeeComponent],
    providers:[],
    exports:[]
})
export class EmployeeModule{

}