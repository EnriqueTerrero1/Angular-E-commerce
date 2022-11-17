import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Producto';
import { Productos } from 'src/app/seedData/seedData';

@Component({
  selector: 'app-landing-page-product',
  templateUrl: './landing-page-product.component.html',
  styleUrls: ['./landing-page-product.component.css']
})
export class LandingPageProductComponent implements OnInit {


  productos:Producto[] = Productos;

  constructor() { }

  ngOnInit(): void {
  }

}
