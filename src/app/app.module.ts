import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeFormComponent } from './recipe-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RecipeFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
