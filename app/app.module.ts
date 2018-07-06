import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';
import {EmployeeModule} from './employee-module/employee-module'

import { AppComponent } from './app.component';
import { UserComponent} from './user/user.component';
import { ProductComponent } from './product/product.component'
import { HighLightDirective} from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component'
import { CountryCodePipe } from './pipe-demo/pipes/countrycode.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserService} from './services/user.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { APP_Routes } from './app.routing';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
//import { EmployeeComponent } from './employee-module/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    HighLightDirective, 
    UnlessDirective, 
    PipeDemoComponent, 
    CountryCodePipe,
    FilterPipe, 
    LoginComponent, 
    RegisterComponent,
    OverviewComponent, 
    SpecificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(APP_Routes),
    EmployeeModule
  ], 
  providers: [UserService,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi :true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
