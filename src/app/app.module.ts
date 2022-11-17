import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FiltroComponent } from './filtro/filtro.component';
import { RenderizarProductosComponent } from './renderizar-productos/renderizar-productos.component';
import { CommonModule } from '@angular/common'; 
import { FormsModule ,ReactiveFormsModule} from '@angular/forms'; 
import { Producto } from './Producto';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CrearProductoComponent } from './Producto/crear-producto/crear-producto.component';
import { PageNotFoundedComponent } from './page-not-founded/page-not-founded.component';
import { LandingPageProductComponent } from './Producto/landing-page-product/landing-page-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    
    FiltroComponent,
         RenderizarProductosComponent,
         LandingPageComponent,
         
         CrearProductoComponent,
                   PageNotFoundedComponent,
                   LandingPageProductComponent,
         
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
