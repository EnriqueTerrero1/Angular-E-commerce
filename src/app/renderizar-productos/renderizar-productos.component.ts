import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../Producto';

@Component({
  selector: 'app-renderizar-productos',
  templateUrl: './renderizar-productos.component.html',
  styleUrls: ['./renderizar-productos.component.css']
})
export class RenderizarProductosComponent implements OnInit {

  constructor() { }

  posicion:number=0;
  
  
  //productosParaMostrar!:Producto[];

  @Input()
  productos:Producto[]=[];

  @Input()
  productosParaMostrar:Producto[]=[];

    cantidadDeColumnas:number=4;
  
    cantidadDeFilas = this.productosParaMostrar.length/this.cantidadDeColumnas;
    
    posicionSiguiente():void{

      this.posicion+=3;
      this.cambiarProductos();
      

    }
    posicionAnterior():void{
      this.posicion-=3;
      this.cambiarProductos();

    }

    cambiarProductos(){
    this.productosParaMostrar=this.productosParaMostrar.slice(this.posicion , this.posicion+3);
    }



    cantidadfilas(){
    // return (this.productosParaMostrar.length/this.cantidadDeColumnas);

     return 5


    }
  ngOnInit(): void {
//this.cantidadfilas();

    //this.productosParaMostrar = this.productos;
    //this.cambiarProductos();
  }

}
