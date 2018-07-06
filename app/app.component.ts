import { Component } from '@angular/core';
import { User} from './model/user'
import { UserService } from './services/user.service';

//import { USER_DATA } from './data/mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appln';
  users : User[];
constructor(private userService : UserService)
{}
Increase()
{
  this.userService.counter++;
}
ngOnInit(){
     this.userService.getUserData().subscribe(d => this.users = d);
    this.userService.getApiData();
  }
}
