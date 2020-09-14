import { Component, OnInit } from '@angular/core';
import { preguntasFrec } from '../classes/preguntasFrec';

@Component({
  selector: 'app-preguntas-frec',
  templateUrl: './preguntas-frec.component.html',
  styleUrls: ['./preguntas-frec.component.css']
})
export class PreguntasFrecComponent implements OnInit {

  infoIzquierda = new Array<preguntasFrec>();
  infoDerecha = new Array<preguntasFrec>();
  showResp: boolean[] = [false, false, false, false, false, false];

  constructor() {

    var pregunta1 = new preguntasFrec;
    pregunta1.pregunta = '¿Cómo me registro?';
    pregunta1.respuesta = 'Click al botón Registrarse, llenar los datos pedidos y enviar la información.';
    this.infoIzquierda.push(pregunta1);

    var pregunta2 = new preguntasFrec;
    pregunta2.pregunta = '¿Cómo veo el precio de los productos?';
    pregunta2.respuesta = 'Dar click en el botón Ver más, ubicado debajo de la imagen del producto.';
    this.infoIzquierda.push(pregunta2);

    var pregunta3 = new preguntasFrec;
    pregunta3.pregunta = '¿Cómo busco un producto en especifico?';
    pregunta3.respuesta = 'En el buscador ubicado en la parte superior derecha, escribir el nombre del producto.';
    this.infoIzquierda.push(pregunta3);

    var pregunta4 = new preguntasFrec;
    pregunta4.pregunta = '¿Cómo elimino un producto del carrito?';
    pregunta4.respuesta = 'Dar click al ícono de basura que corresponda al producto que se desea eliminar.';
    this.infoDerecha.push(pregunta4);

    var pregunta5 = new preguntasFrec;
    pregunta5.pregunta = '¿Es posible editar la cantidad de un producto en el carrito?';
    pregunta5.respuesta = 'Sí, se debe dar click a las flechas a los costados de la cantidad y dar click al ícono de lapiz para guardar los cambios.';
    this.infoDerecha.push(pregunta5);

    var pregunta6 = new preguntasFrec;
    pregunta6.pregunta = '¿Cuándo llegará mi pedido?';
    pregunta6.respuesta = 'El producto llegará entre 2 semanas a un mes.';
    this.infoDerecha.push(pregunta6);
  }

  ngOnInit() {
  }

  showAns(i: number) {
    this.showResp[i] = true;
  }

  hideAns(i: number) {
    this.showResp[i] = false;
  }
}
