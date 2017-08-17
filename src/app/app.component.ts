import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAlmanac';
  name='';

  constructor(private cookie:CookieService){}

  ngOnInit(){
    console.log(this.cookie.get('myalmanac_authtoken'));
  }
}
