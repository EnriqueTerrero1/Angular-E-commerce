import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from '../Producto';
import { Productos } from 'src/app/seedData/seedData';

@Component({
  selector: 'app-landing-page-product',
  templateUrl: './landing-page-product.component.html',
  styleUrls: ['./landing-page-product.component.css']
})
export class LandingPageProductComponent implements OnInit {


  productos:ProductoDTO[] = Productos;

  constructor() { }

  ngOnInit(): void {
  }
  
  eliminar(producto:ProductoDTO){

    console.log("Producto eliminado "+ producto.descripcion);

  }
}
