import { Producto } from "./producto";

export class CarritoGet{
    id: number;
    cantidad: number;
    precioTotal: number;
    userId: number;
    productoId: number;
    producto: Producto;
}