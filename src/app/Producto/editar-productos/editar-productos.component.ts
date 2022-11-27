import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoDTO } from 'src/app/Producto/Producto';
@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {

  constructor(private router:Router) { }


  modelo:ProductoDTO={id:1,descripcion:"laptop",precio:2333,categoria:"tecnologia",marca:"dell", imagen:''};
  ngOnInit(): void {
  }

  guardarCambios(producto:ProductoDTO){
    console.log(producto);

    this.router.navigate(['/producto'])
  }

}