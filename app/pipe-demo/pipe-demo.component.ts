import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
   filteredstatus="";
   todos = [
     {label : "Some work", status : 'pending'   }, 
     {label : "current work", status : 'completed'   },
     {label : "current work", status : 'pending'   },
     {label : "current work", status : 'completed'   }
    ]
    AddTodo(){
      this.todos.push(
        {label : "Some work", status : 'pending'   }, 
      )
    }

  data = new Promise((resolve,reject)=> {
  setTimeout(()=> {
    resolve("Here the data comes !!" )
  },2000);
  
  })
 
 constructor() { }
 
  ngOnInit() {
  }

}
