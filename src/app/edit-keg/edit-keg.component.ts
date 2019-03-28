import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
// import { AppComponent } from '../app.component';
import { Keg } from '../models/keg.model';


@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['../new-keg/new-keg.component.css', '../kegs/kegs.component.css']
})
export class EditKegComponent implements OnInit {
  @Input() childKegList: Keg[];

  constructor() { }

  ngOnInit() {
  }
}
