import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Flight } from '../flight';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights: Flight[];

  constructor(private flightsService: FlightsService) { 
    this.flights = this.flightsService.getFlights();
  }

  ngOnInit(): void {
    this.flights = this.flightsService.getFlights();
  }

}
