import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie';

import { AlmanacService } from './almanac.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAlmanac';
  name='';

  constructor(private cookie:CookieService, private almanacService:AlmanacService){}

  ngOnInit(){
    console.log(this.cookie.get('myalmanac_authtoken'));
    if(this.cookie.get('myalmanac_authtoken')){
      this.almanacService.setToken(this.cookie.get('myalmanac_authtoken'));
    } else {
      window.location.href = "http://192.168.0.10:3000";
    }

    this.almanacService.getUserEntries().subscribe(data => console.log(data), err => window.location.href = 'http://192.168.0.10:3000');
  }
}
