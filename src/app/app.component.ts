import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  compo: any;

  onActivate(componentReference) {
    this.compo = componentReference;
  }

  listProd(e) {
    console.log(e);
    console.log(this.compo);
    if (this.compo.compName == 'Productos') {
      this.compo.listProducts(e);
    }
  }

}
