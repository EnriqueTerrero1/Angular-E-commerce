import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoDTO } from 'src/app/Producto/Producto';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {
  
  form: FormGroup

  @Output()
  onSubmit:EventEmitter<ProductoDTO> = new EventEmitter<ProductoDTO>;
  
  constructor(private formBuilder:FormBuilder) { }

 @Input()
 modelo:ProductoDTO;

  ngOnInit(): void {

     this.form= this.formBuilder.group({

      Descripcion:['',{validators:[Validators.required],},],
        Categoria:['',{validators:[Validators.required],},],
       Marca:[''],
       Precio:['',],
       imagen:''
    });

    if(this.modelo != undefined){
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(archivo:File){
    this.form.get('imagen').setValue(archivo);
  }

  guardarCambios(){

    this.onSubmit.emit(this.form.value);
    console.log("producto guardado")
  }

 



}
