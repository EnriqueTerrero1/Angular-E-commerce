import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  @Input()
    categorias:string[]=[];

    @Output()
    filtroDeCategoria:  EventEmitter <string> = new EventEmitter<string>();
  
    productosPorCategoria(categoria:string){

      console.log(categoria);
      this.filtroDeCategoria.emit(categoria);


    }

  constructor() { }

  ngOnInit(): void {
  }

}
