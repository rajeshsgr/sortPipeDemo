import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {


  constructor(private carSvc: CarService) { }

  carList: { model: string, year: string, price: number }[] = [];


  ngOnInit() {

    this.carList = this.carSvc.cars;

  }

}
