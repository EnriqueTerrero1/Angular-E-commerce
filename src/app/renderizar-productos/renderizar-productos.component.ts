import { Component, Input, OnInit } from '@angular/core';
import { CarritoDTO } from '../Carrito';
import { Pedidos } from '../Pedido';
import { ProductoDTO } from '../Producto/Producto';
import { Productos } from '../seedData/seedData';

@Component({
  selector: 'app-renderizar-productos',
  templateUrl: './renderizar-productos.component.html',
  styleUrls: ['./renderizar-productos.component.css']
})
export class RenderizarProductosComponent implements OnInit {

  constructor() { }

  posicion:number=0;
  
  
  //productosParaMostrar!:Producto[];

  producto:ProductoDTO;
  @Input()
  productos:ProductoDTO[]=[];

  @Input()
  productosParaMostrar:ProductoDTO[]=[];

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
    agregaAlCarrito(producto:ProductoDTO){

      
      Pedidos.push(producto);
      
      console.log(Pedidos);

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
