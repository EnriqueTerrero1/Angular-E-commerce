import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  @Input()
    categorias:string[]=[];
  


  constructor() { }

  ngOnInit(): void {
  }

}
