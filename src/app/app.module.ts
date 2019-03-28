import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { KegsComponent } from './kegs/kegs.component';
import { NewKegComponent } from './new-keg/new-keg.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditKegComponent,
    KegsComponent,
    NewKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
