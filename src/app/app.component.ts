import { Component } from '@angular/core';
import { Keg } from '../keg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portland Tap Room';

  masterBeerList: Keg[] = [
    new Keg ('./assets/img/fancy-barrel.jpg', 'Fancy Beer', 'The Fanciest', 5, 4.8, 124 ),
    new Keg ('./assets/img/whiskey-barrel.jpg', 'Pliny the Elder', 'Russian River', 9, 5.5, 124 ),
    new Keg ('./assets/img/oak-barrel.jpg','Miller Lite','Miller',3, 3.4, 124 )
  ]

}
