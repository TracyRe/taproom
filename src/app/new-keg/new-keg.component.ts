import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';


@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent implements OnInit {
  @Output() sendKeg = new EventEmitter();

  submitForm(img: string, name: string, brand: string, price: string, abv: string) {
    let newKeg: Keg = new Keg(img, name, brand, parseInt(price), parseInt(abv));
    this.sendKeg.emit(newKeg);
  }

  constructor() { }

  ngOnInit() {
  }

}
