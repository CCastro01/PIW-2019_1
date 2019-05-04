import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DatepickerBasicComponent } from './datepicker-basic/datepicker-basic.component';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';
import { InvestidorComponent } from './investidor/investidor.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerBasicComponent,
    DatepickerPopupComponent,
    InvestidorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
