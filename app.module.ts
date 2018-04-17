import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';



@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    FormsModule
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
         path: 'new-cmp',
         component: NewCmpComponent
      }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
