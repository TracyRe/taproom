import { Component, OnInit, Input} from '@angular/core';
import { AppComponent } from '../app.component';
import { Keg } from '../../keg';

@Component({
  selector: 'app-pint',
  templateUrl: './pint.component.html',
  styleUrls: ['./pint.component.css']
})
export class PintComponent implements OnInit {
  @Input() childMenuList: Keg;

  currentKeg : Keg;
  sellPint(beer) {

    beer.pints --;
  }




  // constructor() { }

  ngOnInit() {
  }
}
