import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';


@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
