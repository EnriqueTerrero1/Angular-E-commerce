import { Component, Input, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ProductoDTO } from '../Producto/Producto';
import { Productos } from '../seedData/seedData';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

 
productos:ProductoDTO[]=[];

  productosFiltrados(productos:ProductoDTO[]){

    this.productos = productos;

  }

 
 

 ngOnInit(): void {





  
 }

}








