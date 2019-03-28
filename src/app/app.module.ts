import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PintComponent } from './pint/pint.component';
import { FormComponent } from './form/form.component';
import { KegsComponent } from './kegs/kegs.component';
import { NewKegComponent } from './new-keg/new-keg.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PintComponent,
    FormComponent,
    KegsComponent,
    NewKegComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
