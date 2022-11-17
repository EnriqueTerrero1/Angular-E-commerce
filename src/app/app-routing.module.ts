import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FiltroComponent } from './filtro/filtro.component';
import { CrearProductoComponent } from './Producto/crear-producto/crear-producto.component';
import { PageNotFoundedComponent } from './page-not-founded/page-not-founded.component';
import { LandingPageProductComponent } from './Producto/landing-page-product/landing-page-product.component';


const routes:Routes=[
  {path:'',component:LandingPageComponent},
  {path:'filtro',component:FiltroComponent},
  {path:'crear/producto',component:CrearProductoComponent },
  {path:'producto',component:LandingPageProductComponent},
  {path: '**',component:PageNotFoundedComponent}
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
