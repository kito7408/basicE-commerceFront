import { Component, OnInit } from '@angular/core';
import { Producto } from '../classes/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[];
  prodPerPage: number = 6;
  prodOnPage: Producto[];
  actualPage: number;
  numberOfPages: number;
  filterString: string;
  searching: boolean;
  noProds: boolean;
  compName: string;

  constructor(private prodService: ProductoService) {
    this.actualPage = 1;
    this.numberOfPages = 1;
    this.searching = false;
    this.noProds = false;
    this.compName = 'Productos';
    this.listProducts(null);
  }

  ngOnInit() {
  }

  counter(i: number) {
    return new Array(i);
  }

  listProducts(filter) {
    this.filterString = 'Productos';
    this.searching = false;
    if (filter) {
      if (typeof filter == 'number') {
        this.prodService.getByCategoriaId(filter).subscribe((data) => {
          switch (filter) {
            case 1:
              this.filterString = "Productos > Linea Blanca";
              break;
            case 11:
              this.filterString = "Productos > Ropa";
              break;
            case 21:
              this.filterString = "Productos > Juguetes";
              break;
            case 31:
              this.filterString = "Productos > Computo";
              break;

            default:
              break;
          }
          this.productos = data;
          this.numberOfPages = Math.floor(this.productos.length / this.prodPerPage);
          if (this.productos.length % this.prodPerPage != 0) {
            this.numberOfPages += 1;
          }
          this.actualPage = 1;
          this.paginate();
        });
      } else {
        this.prodService.getBySearch(filter).subscribe((data) => {
          this.filterString = 'Palabra buscada: ' + filter;
          this.searching = true;
          this.productos = data;
          this.numberOfPages = Math.floor(this.productos.length / this.prodPerPage);
          if (this.productos.length % this.prodPerPage != 0) {
            this.numberOfPages += 1;
          }
          this.actualPage = 1;
          this.paginate();
        });
      }
    } else {
      this.prodService.getAll().subscribe((data) => {
        this.productos = data;
        this.numberOfPages = Math.floor(this.productos.length / this.prodPerPage);
        if (this.productos.length % this.prodPerPage != 0) {
          this.numberOfPages += 1;
        }
        this.actualPage = 1;
        this.paginate();
      });
    }
  }

  paginate() {
    this.noProds = false;
    this.prodOnPage = this.productos.slice(this.prodPerPage * (this.actualPage - 1), this.prodPerPage * this.actualPage);
    if (this.prodOnPage.length == 0) {
      this.noProds = true;
    }
  }

  nextPage() {
    this.actualPage += 1;
    this.paginate();
  }

  prevPage() {
    this.actualPage -= 1;
    this.paginate();
  }

  selectPage(page: number){
    this.actualPage = page;
    this.paginate();
  }
}
