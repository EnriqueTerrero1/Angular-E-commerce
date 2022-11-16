import { Component, OnInit } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Producto } from './Producto';
import { Productos } from './seedData/seedData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-commerce';

productos:Producto[]=Productos;

categorias:string[] =[];

productosFiltrados!:Producto[];

filtrando:boolean=false;




 ngOnInit(): void {

this.productos.forEach(producto => {

  if(producto.categoria != this.categorias.find(categoria => categoria == producto.categoria)){

  this.categorias.push(producto.categoria);
  }
  
});

console.log(this.categorias)
}


filtrar(productos:Producto[]){

  this.filtrando=true;
  this.productosFiltrados =productos
}




}








