import { Component } from '@angular/core';
import { Passenger, SearchFacade } from '@flight-workspace/passenger/domain';
import { AuthLibService } from '@flight-workspace/shared/auth-lib';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'passenger-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  firstname = '';
  name = 'Smith';
  passengerList$ = this.searchFacade.passengerList$;
  selectedPassenger: Passenger | undefined;

  user = this.authService.user;

  constructor(private searchFacade: SearchFacade,
              private authService: AuthLibService) {}

  load(): void {
    this.searchFacade.load(this.name, this.firstname);
  }

  toggleSelection(p: Passenger) {
    this.selectedPassenger = p;
  }

  changeUser() {
    this.authService.login('Andriy', '123456789');
    this.user = this.authService.user;
  }
}
