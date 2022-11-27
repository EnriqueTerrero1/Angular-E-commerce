import { Component, OnInit } from '@angular/core';
import { CarritoDTO } from 'src/app/Carrito';
import { ProductoDTO } from 'src/app/Producto/Producto';
import { CARRITO} from 'src/app/seedData/seedData';

@Component({
  selector: 'app-landing-page-carrito',
  templateUrl: './landing-page-carrito.component.html',
  styleUrls: ['./landing-page-carrito.component.css']
})
export class LandingPageCarritoComponent implements OnInit {


  constructor() { }

  carrito:CarritoDTO=CARRITO;
  productos:ProductoDTO[]=this.carrito.productos;

  ngOnInit(): void {

    console.log("productos"+this.productos)
  }

}
