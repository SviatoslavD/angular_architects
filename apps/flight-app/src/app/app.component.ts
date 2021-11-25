import {Component, NgZone} from '@angular/core';
import { AuthLibService } from '@flight-workspace/shared/auth-lib';
import { shareNgZone } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';

  constructor(private authService: AuthLibService,
              private ngZone: NgZone) {
    shareNgZone(ngZone);
    this.authService.login('Max', '');
  }
}
