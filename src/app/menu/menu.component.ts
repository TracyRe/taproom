import { Component, OnInit, Input } from '@angular/core';
import { Keg } from '../../keg';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() childMenuList: Keg[];


  abvStrength(beer) {
    if (beer.abv >= 6 ) {
      return "abv-darker3"
    } else if (beer.abv >= 5 ) {
      return "abv-darker2"
    } else if (beer.abv >= 4 ) {
      return "abv-darker1"
    } else  {
      return "abv-base"
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
