import { Component, Input, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Producto } from '../Producto';
import { Productos } from '../seedData/seedData';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  productos:Producto[]=Productos;

categorias:string[] =[];


@Input()
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






getProducto(categoria:string){


  this.productosFiltrados= this.productos.filter(producto => producto.categoria==categoria);
  return this.productosFiltrados;

}

filtrar(productos:Producto[]){

  this.filtrando=true;
 this.productosFiltrados =productos
 console.log(this.productosFiltrados);
}

getProductByFilter(){

  
  return this.productosFiltrados;
}
   
}

