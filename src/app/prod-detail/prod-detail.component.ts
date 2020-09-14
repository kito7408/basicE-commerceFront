import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../classes/producto';
import { User } from '../classes/user';
import { CarritoPost } from '../classes/carritoPost';
import { ProductoService } from '../service/producto.service';
import { CarritoService } from '../service/carrito.service';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.css']
})
export class ProdDetailComponent implements OnInit {

  producto: Producto;
  prodId: number;
  stringTitle: string;
  user: User;
  carritoItem = new CarritoPost;
  compName: 'Prod-detail';

  constructor(
    private route: ActivatedRoute,
    private routes: Router,
    private prodService: ProductoService,
    private carritoService: CarritoService
  ) {
    this.stringTitle = '';
    this.carritoItem.cantidad = 1;
    this.route.params.subscribe((params) => {
      this.prodId = params['id'];
      this.prodService.getById(this.prodId).subscribe((data) => {
        this.producto = data;
        switch (this.producto.categoriaId) {
          case 1:
            this.stringTitle = "Linea Blanca > " + this.producto.nombre;
            break;
          case 2:
            this.stringTitle = "Ropa > " + this.producto.nombre;
            break;
          case 3:
            this.stringTitle = "Juguetes > " + this.producto.nombre;
            break;
          case 4:
            this.stringTitle = "Computo > " + this.producto.nombre;
            break;
          default:
            break;
        }
        this.updatePrecioTotal();
        this.user = JSON.parse(localStorage.getItem('user'));
      });
    });
  }

  ngOnInit() {
  }

  updatePrecioTotal() {
    if (this.carritoItem.cantidad > 0) {
      this.carritoItem.precioTotal = this.producto.precio * this.carritoItem.cantidad;
    }
  }

  addToCart() {
    if (this.carritoItem.cantidad > 0) {
      this.carritoItem.userId = this.user.id;
      this.carritoItem.productoId = this.prodId;

      this.carritoService.save(this.carritoItem).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
