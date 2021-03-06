import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as FlightBookingActions from './flight-booking.actions';



@Injectable()
export class FlightBookingEffects {

  loadFlightBookings$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(FlightBookingActions.loadFlightBookings),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => FlightBookingActions.loadFlightBookings()),
          catchError(error => of(FlightBookingActions.loadFlightBookingsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
