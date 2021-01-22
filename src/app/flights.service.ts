import { Injectable } from '@angular/core';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})

export class FlightsService {
  
  dD1: Date = new Date('2021-01-25T01:18:21.932Z');
  aD1: Date = new Date('2021-01-25T02:18:21.932Z');
  
  dD2: Date = new Date('2021-06-25T01:18:21.932Z');
  aD2: Date = new Date('2021-07-25T02:18:21.932Z');

  flights: Flight[] = [
    {origin:"Lagos", destination: "Abuja", flightNumber: 897,
     depart:this.dD1,
     arrive:this.aD1,nonstop:true},
    {origin:"Aba", destination: "Enugu", flightNumber: 243,
    depart:this.dD2,
    arrive:this.aD2,nonstop:true},];
     
  constructor() {}

    getFlights() {
      return this.flights; 
    }
  
    postFlight(flight: Flight) {
  
    }
  
    deleteFlight(id: number) {
      
    }

}
