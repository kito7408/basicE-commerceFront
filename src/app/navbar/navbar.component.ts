import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/user';
import { Producto } from '../classes/producto';
import { UserService } from '../service/user.service';
import { ProductoService } from '../service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean;
  user: User;           //for localstorage
  newUser = new User;   //for forms
  newProduct = new Producto;
  errorLogin: boolean;
  errorReg: boolean;
  errorProd: boolean;
  imagen: File;
  usersTest: User[];
  repass: string;
  prodImg: File;
  filemsg: string;
  searchText: string;
  @ViewChild('closeLoginModal') closeLoginModal: ElementRef;
  @ViewChild('closeRegModal') closeRegModal: ElementRef;
  @ViewChild('closeAddUserModal') closeAddUserModal: ElementRef;
  @ViewChild('closeAddProductModal') closeAddProductModal: ElementRef;

  @Output() prodEvent = new EventEmitter;

  constructor(
    private userService: UserService,
    private prodService: ProductoService,
    private route: ActivatedRoute,
    private routes: Router
  ) {
    this.errorLogin = false;
    this.errorReg = false;
    this.errorProd = false;
    this.filemsg = '';
    this.searchText = '';
    this.newUser.userTypeId = 2;
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  ngOnInit() { }

  login() {
    this.userService.login(this.newUser.username, this.newUser.password)
      .subscribe((data: any) => {
        localStorage.setItem('user', JSON.stringify(data.data));
        this.user = data.data;
        this.newUser.username = '';
        this.newUser.password = '';
        this.closeLoginModal.nativeElement.click();
      }, (error) => {
        console.log("no existe el usuario");
        console.log(error);
        this.errorLogin = true;
        setTimeout(() => {
          this.errorLogin = false;
        }, 3000);
      });
  }

  logout() {
    localStorage.removeItem('user');
    this.user = null;
  }

  register() {
    if (this.newUser.password == this.repass) {
      this.userService.save(this.newUser).subscribe((data: any) => {
        if (!this.user) {
          localStorage.setItem('user', JSON.stringify(data.data));
          this.user = data.data;
        }
        this.closeModal();
        this.closeRegModal.nativeElement.click();
        this.closeAddUserModal.nativeElement.click();
      }, (error) => {
        console.log("error al registrar usuario");
        console.log(error);
        this.errorReg = true;
        setTimeout(() => {
          this.errorReg = false;
        }, 3000);
      })
    }
  }

  closeModal() {
    this.newUser = new User;
    this.repass = '';
    this.newUser.userTypeId = 2;
    this.newProduct = new Producto;
  }

  selectFile(event) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.filemsg = 'Debes seleccionar una imagen';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.filemsg = "Solo se aceptan imagenes";
      return;
    }

    this.prodImg = <File>event.target.files[0];
    this.filemsg = '';
  }

  addProd() {
    if (this.filemsg == '' && this.prodImg) {

      this.newProduct.imagen = this.prodImg;
      this.prodService.save(this.newProduct).subscribe((data: any) => {
        this.prodEvent.emit(null);
        this.closeAddProductModal.nativeElement.click();
        this.closeModal();
      }, (error) => {
        console.log("error al agregar producto");
        console.log(error);
        this.errorProd = true;
        setTimeout(() => {
          this.errorProd = false;
        }, 3000);
      })
    }
  }

  listProdCat(categoriaId: number) {
    this.routes.navigate(['/']).then(e => {
      this.prodEvent.emit(categoriaId);
    });
  }

  listProdSearch(textSearch: string) {
    this.routes.navigate(['/']).then(e => {
      this.prodEvent.emit(textSearch);
    });
  }

  listAll() {
    this.prodEvent.emit(null);
  }
}
