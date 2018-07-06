import {Routes} from '@angular/router';
//import { EmployeeComponent } from '../employee-module/employee/employee.component';
import { LazyComponent } from './lazy/lazy.component';

export const LAZY_ROUTES  : Routes = [
    {
        path : '',
        component : LazyComponent
    }
]