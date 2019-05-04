import { BarraMenuModule } from './barra-menu/barra-menu.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BarraMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
