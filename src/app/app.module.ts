import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { listaProductosComponent } from './productos/lista-productos/lista-productos.component';
@NgModule({
  declarations: [
    AppComponent,
    listaProductosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
