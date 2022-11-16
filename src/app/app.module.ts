import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FiltroComponent } from './filtro/filtro.component';
import { RenderizarProductosComponent } from './renderizar-productos/renderizar-productos.component';
import { CarucelComponent } from './carucel/carucel.component';
import { CommonModule } from '@angular/common'; 
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'; 
import { Producto } from './Producto';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    
    FiltroComponent,
         RenderizarProductosComponent,
         CarucelComponent,
         LandingPageComponent,
         
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
