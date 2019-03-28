import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';
import { EditKegComponent } from '../edit-keg/edit-keg.component'
// import { NewKegComponent} from '../new-keg/new-keg.component';

@Component({
  selector: 'app-kegs',
  templateUrl: './kegs.component.html',
  styleUrls: ['./kegs.component.css']
})
export class KegsComponent implements OnInit {

  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();



  sellPintClicked(pintToSell: Keg) {
    this.clickSender.emit(pintToSell);
  }

  sellGrowlerClicked(growlerToSell: Keg) {
    this.clickSender.emit(growlerToSell);
  }

  replaceKegClicked(kegToReplace: Keg) {
    this.clickSender.emit(kegToReplace);
  }

  sellPint(beer) {
    beer.pints --;
  }
  sellGrowler(beer) {
    beer.pints -=4;
  }
  replaceKeg(beer) {
    beer.pints = 124;
  }

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

  pintsLow(beer)  {
    if (beer.pints < 10 ) {
      return "low-pint-alert"
    }
  }

  timeToReplaceKeg(beer)  {
    if (beer.pints >= 10 ) {
      return "hide-button"
    } else {
      return "show-button"
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
