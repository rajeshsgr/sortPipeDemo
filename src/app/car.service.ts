import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  cars = [
    
    {model: "Volkswagen Jetta",year: "2019", price: 14000},
    {model: "Nissan Sentra SV",year: "2018", price: 12000},
    {model: "Kia Optima LX",year: "2019", price: 16500},
    {model: "Toyota Corolla LE",year: "2018", price: 13500},
    {model: "Hyundai ELentra SEL",year: "2019", price: 14800},
    {model: "Dodge Charger",year: "2016", price: 7800},
    {model: "Mercedes Benz E Class",year: "2015", price: 20000},
    {model: "Honda Civic",year: "2016", price: 13000},
    {model: "Ford Fusion",year: "2014", price: 9670},


  ];

}
