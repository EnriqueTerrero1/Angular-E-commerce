import { Pedido } from "./Pedido";
import { ProductoDTO } from "./Producto/Producto";

export class CarritoDTO {

    id:number
    productos:ProductoDTO[];
    cantidadDeArticulos:number;
    total:number;
    

    
}



