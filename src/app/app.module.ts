import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertycardComponent } from './property/propertycard/propertycard.component';
import { PropertylistComponent } from './property/propertylist/propertylist.component';
import { NavbarComponent } from './nav/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertycardComponent,
    PropertylistComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
