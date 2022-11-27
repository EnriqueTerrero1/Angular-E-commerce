import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FiltroComponent } from './filtro/filtro.component';
import { CrearProductoComponent } from './Producto/crear-producto/crear-producto.component';
import { PageNotFoundedComponent } from './page-not-founded/page-not-founded.component';
import { LandingPageProductComponent } from './Producto/landing-page-product/landing-page-product.component';
import { EditarProductosComponent } from './Producto/editar-productos/editar-productos.component';
import { LandingPageCarritoComponent } from './carrito/landing-page-carrito/landing-page-carrito.component';
const routes:Routes=[
  {path:'',component:LandingPageComponent},
  //{path:'filtro',component:FiltroComponent},
  {path:'producto/editar',component:EditarProductosComponent},
  {path:'producto/crear',component:CrearProductoComponent },
  {path:'producto',component:LandingPageProductComponent},
  {path:'carrito',component:LandingPageCarritoComponent},
  {path: '**',component:PageNotFoundedComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
