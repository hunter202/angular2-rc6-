import {Component} from '@angular/core';
import {user} from './Users'; 
}
  
@Component({
    selector: 'app',
    template: `<ul>
               <li *ngFor="let rate of raters">{{rate.firstname}} 
               {{rate.rating}}   </li>
    </ul>`
})
export class AppComponent {
    name: string;
    rates: number[]=[1,2,3,4,5];

    public raters=[
      new user('swastik',0),
      new user('hunter',0),
      new user('pex',0)
    ];
}