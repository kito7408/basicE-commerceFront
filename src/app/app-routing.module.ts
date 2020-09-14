import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component'
import { CarritoComponent } from './carrito/carrito.component';
import { TermsComponent } from './terms/terms.component';
import { PreguntasFrecComponent } from './preguntas-frec/preguntas-frec.component';
import { ContactenosComponent } from './contactenos/contactenos.component';

const routes: Routes = [
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ProdDetailComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'preguntas', component: PreguntasFrecComponent },
  { path: 'contacto', component: ContactenosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
