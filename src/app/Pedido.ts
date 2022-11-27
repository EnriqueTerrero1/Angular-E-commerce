import { ProductoDTO } from "./Producto/Producto";

export class Pedido {


    productos:ProductoDTO[]=[];
    
      
}

export const Pedidos:ProductoDTO[]=[
    {
        id:3,
        categoria:"Deportivo",
        descripcion:"Tenis",
        precio: 23000,
        marca: "Nike",
        imagen:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s6dp2gck3oukxj9csz5y/calzado-air-max-270-KkLcGR.png"
    }

];


