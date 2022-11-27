import { Component, OnInit } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductoDTO } from './Producto/Producto';
import { Productos } from './seedData/seedData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E-commerce';

productos:ProductoDTO[]=Productos;

categorias:string[] =[];

productosFiltrados!:ProductoDTO[];

filtrando:boolean=false;




 ngOnInit(): void {









}}








