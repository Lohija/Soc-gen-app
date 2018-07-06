import {Routes} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { LoginGuardService } from './services/login-guard.service';
import { EmployeeComponent } from './employee-module/employee/employee.component';

export const APP_Routes : Routes = [
    {
        path : '',
        redirectTo: 'login',
        pathMatch : 'full'
    },
    
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'lazy',
        loadChildren :  'app/lazy/lazy.module#LazyModule'
    },
    {
        path : 'register',
        component : RegisterComponent
    },
    {
        path : 'pipe',
        component : PipeDemoComponent
    },
    {
        path :'user',
        component : UserComponent
    },
    {
        path :'employee',
        component : EmployeeComponent
    },
    {
        path :'products/:id',
        component : ProductComponent,
      //  canActivate : [LoginGuardService],
        children : [{
             path:'',
             component : OverviewComponent
        },
        {
            path : 'spec',
            component : SpecificationComponent
        }
       ]
    },
    {
        path : "**",
        redirectTo: 'login',
        pathMatch : 'full'
 
    }
]