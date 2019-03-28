import { Component, OnInit, Input} from '@angular/core';
import { AppComponent } from '../app.component';
import { Keg } from '../models/keg.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
}
