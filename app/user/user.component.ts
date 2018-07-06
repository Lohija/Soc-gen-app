import {Component,Input,
     OnChanges,OnInit,
     DoCheck,AfterContentInit,AfterContentChecked,
     AfterViewInit,AfterViewChecked,OnDestroy, SimpleChange} 
     from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';


@Component({
    selector : 'app-user',
    // template : '<h1>Component loaded !!</h1>'
    templateUrl : './user.component.html',
    // styles : [`
    //    h2{
    //        color : green
    //    }

    // `]
    styleUrls : [
        `./user.component.css`
      ]
})
export class UserComponent{
    headerInfo = "Welcome";
    mycolor = "yellow";
    @Input('userInput') users:User[];
    @Input('title') title :any;
    // user = {
    //     firstName : 'Hello',
    //     lastName : 'World',        
    //     dob : new Date(1991,1,1),
    //     income : 1,
    //     image : "assets/1.jpg",
    //     company : 'Soc gen',
    //     vote : 10
    // }
    myBorderStyle = {
        myBorder : false, decoration : true
    }
    moreInfo(user : any){
       alert(`${user.firstName} is working with ${user.company}`);
    }
    constructor(private userService : UserService){
        console.log('Constructor')
    }
    Increase()
    {
      this.userService.counter++;
    }
    ngOnChanges(changes : SimpleChange){ 
        console.log('NgOnChanges') 
        console.log(changes);
    }
    ngOnInit(){ console.log('NgOnInit') }
    ngDoCheck(){ console.log('NgDoCheck') }
    ngAfterContentInit(){ console.log('NgAfterContentInit') }
    ngAfterContentChecked(){console.log('NgAfterContentChecked')}
    ngAfterViewInit(){ console.log('NgAfterviewinit')}
    ngAfterViewChecked(){console.log('AfterViewChecked')}
    //ngOnDestroy(){}
}

