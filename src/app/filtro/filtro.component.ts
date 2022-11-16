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

 productos: Producto[] = Productos;
  

  constructor(private formBuilder: FormBuilder) { }

 
  form!: FormGroup

  @Output()

  buscar: EventEmitter<Producto[]> = new EventEmitter<Producto[]>();


  ngOnInit(): void {

    console.log(this.productos);
    this.form = this.formBuilder.group({
      marca: '',
      
    });
    this.buscarProducto(this.form.value);
    this.form.valueChanges.subscribe(valores => {
    this.productos=Productos;
    this.buscarProducto(valores);
    })

  }


  buscarProducto(valores: any) {

    if (valores.marca) {
      console.log(valores);
      this.productos = this.productos.filter(producto => producto.marca.indexOf(valores.marca) !== -1);
      console.log(this.productos);

    }
    

  }

}
