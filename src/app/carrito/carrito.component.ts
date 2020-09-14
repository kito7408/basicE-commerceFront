import { Component, OnInit } from '@angular/core';
import { Producto } from '../classes/producto';
import { User } from '../classes/user';
import { CarritoGet } from '../classes/carritoGet';
import { CarritoPost } from '../classes/carritoPost';
import { CarritoService } from '../service/carrito.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carritoList: CarritoGet[];
  user: User;
  cantOriginal: number[];
  noItems: boolean;

  constructor(
    private carrService: CarritoService,
    private userService: UserService
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.noItems = false;
    this.listCarrito();
  }

  ngOnInit() {
  }

  listCarrito(){
    this.cantOriginal = [];
    this.noItems = false;
    this.carrService.getByUserId(this.user.id).subscribe((data) => {
      this.carritoList = data;
      data.forEach(element => {
        this.cantOriginal.push(element.cantidad);
      });
      if (this.carritoList.length == 0) {
        this.noItems = true;
      }
    });
  }

  menosCantidad(id: number) {
    this.carritoList.find(x => x.id === id).cantidad -= 1;
    this.calcPrecioTotal(id);
  }

  masCantidad(id: number) {
    this.carritoList.find(x => x.id === id).cantidad += 1;
    this.calcPrecioTotal(id);
  }

  calcPrecioTotal(id: number) {
    this.carritoList.find(x => x.id === id).precioTotal = this.carritoList.find(x => x.id === id).cantidad * this.carritoList.find(x => x.id === id).producto.precio;
  }

  deleteItem(id: number) {
    this.carrService.delete(id).subscribe((data) => {
      this.listCarrito();
    });
  }

  updateItem(item: CarritoGet){
    const itemToUpdate = new CarritoPost;
    itemToUpdate.cantidad = item.cantidad;
    itemToUpdate.id = item.id;
    itemToUpdate.precioTotal = item.precioTotal;
    itemToUpdate.productoId = item.productoId;
    itemToUpdate.userId = item.userId;

    this.carrService.update(itemToUpdate).subscribe((data) => {
      this.listCarrito();
    });
  }
}
