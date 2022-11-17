import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Producto } from '../Producto';
import { Productos } from '../seedData/seedData';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

 

  constructor(private formBuilder: FormBuilder) { }

 
  form!: FormGroup

  productos: Producto[] = Productos;
  categorias:string[]=[];
  
  @Output()

  buscar: EventEmitter<Producto[]> = new EventEmitter<Producto[]>();


  ngOnInit(): void {

    this.productos=Productos;
    console.log(this.productos);
    this.form = this.formBuilder.group({
      marca: '',
      categoria:'',
      descripcion:''
      
    });
    this.buscarProducto(this.form.value);
    this.form.valueChanges.subscribe(valores => {
    this.productos=Productos;
    this.buscarProducto(valores);
    })

    this.productos.forEach(producto => {

      if(producto.categoria != this.categorias.find(categoria => categoria == producto.categoria)){
    
      this.categorias.push(producto.categoria);
      }
      
    });
    
    

   

  }


  buscarProducto(valores: any) {

    if (valores.marca) {
      console.log(valores);
      this.productos = this.productos.filter(producto => producto.marca.indexOf(valores.marca) !== -1);
      console.log(this.productos);

    }
    if (valores.categoria) {
      console.log(valores);
      this.productos = this.productos.filter(producto => producto.categoria.indexOf(valores.categoria) !== -1);
      if(this.productos.length == 0){
        this.productos = Productos;
      }
      console.log(this.productos);

    }
    if(valores.descripcion){
      console.log(valores);
      this.productos = this.productos.filter(producto => producto.descripcion.indexOf(valores.descripcion) !== -1);
      if(this.productos.length == 0){
        this.productos = Productos;
      }
      console.log(this.productos);

    }
    

  }

  filtrarPorCategorias(categoria:string){

  this.productos=Productos;

    this.productos = this.productos.filter(producto => producto.categoria.indexOf(categoria) !== -1);



}

}
