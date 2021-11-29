import { createAction, props } from '@ngrx/store';
import { Flight } from '@flight-workspace/flight-lib';

export const loadFlightBookings = createAction(
  '[FlightBooking] Load FlightBookings'
);

export const flightsLoaded = createAction(
  '[FlightBooking] FlightsLoaded',
  props<{flights: Flight[]}>()
);


export const loadFlightBookingsFailure = createAction(
  '[FlightBooking] Load FlightBookings Failure',
  props<{ error: any }>()
);

export const updateFlight = createAction(
  '[FlightBooking] Update Flight',
  props<{flight: Flight}>()
);
