import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaCardComponent } from './pessoa-card/pessoa-card.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { PostComponent } from './post/post.component';
 

@NgModule({
  declarations: [
    AppComponent,
    PessoaCardComponent,
    PessoaFormComponent,
    LinhaDoTempoComponent,
    PostComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
