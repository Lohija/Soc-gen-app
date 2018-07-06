import {Injectable}  from '@angular/core';
import {USER_DATA} from '../data/mock'
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {User} from '../model/user'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

    constructor(private http : Http,private httpclient : HttpClient){}
    public counter : number = 12;
    getUserData(){
        
       return  this.http.get("assets/data/user-data.json")
         .map(response => <User[]> response.json().userdata);
      //  .subscribe(data => console.log(data))
      // return USER_DATA;
    }
    getApiData(){
      return this.httpclient.get("https://soc-gen-app-b5cc1.firebaseio.com/user-data.json")
        .subscribe(data => console.log(data));
}
    
}