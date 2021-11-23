import { Component, OnInit } from '@angular/core';
import { AirportService } from '@flight-workspace/flight-lib';

@Component({
  selector: 'flight-workspace-airport-component',
  templateUrl: './airport-component.component.html',
  styleUrls: ['./airport-component.component.css']
})
export class AirportComponent implements OnInit {
  airports: string[] = [];

  constructor(private airportService: AirportService) { }

  ngOnInit(): void {
    this.airportService.findAll().subscribe((allAirports: string[]) => {
      this.airports = allAirports;
    });
  }

}
