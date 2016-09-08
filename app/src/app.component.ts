import {Component} from '@angular/core';
import {user} from './Users'; 

  
@Component({
    selector: 'app',
    template: `
               <ul *ngFor="let rate of raters">
               <li><h1>{{rate.firstname}}</h1> 
                   <h2>{{rate.rating}}</h2>
                   <h3>{{rates}}</h3>
                   <div><input type="text" [(ngModel)]="rate.rating" placeholder="enter ratings">
                    </div>
               </li>
               </ul>
    `
})
export class AppComponent {
    name: string;
    rates: number[]=[1,2,3,4,5];	

    public raters=[
      new user('swastik',0),
      new user('hunter',0),
      new user('pex',0),
      new user('@xi0m',0)
    ];
}