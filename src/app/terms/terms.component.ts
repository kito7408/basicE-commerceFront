import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  cuerpo: String;

  constructor() { }

  ngOnInit() {
    this.cuerpo = "<div class='container mt-5'>" + 
    "<h1>Terminos y condiciones</h1>" + 
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie, neque a efficitur posuere, tortor odio tempus lectus, in vulputate odio erat quis mi. Aliquam tincidunt turpis odio, at fringilla nunc efficitur ac. Pellentesque rutrum pretium lorem at ultrices. Aenean maximus viverra enim, vel auctor lacus accumsan commodo. Integer rutrum tortor quis lorem bibendum porta. Maecenas ac ultricies eros, vestibulum scelerisque sapien. Proin eget finibus est.</p>"  + 
    "<p>Cras ullamcorper eu tortor at convallis. Aenean ut pretium enim. Quisque venenatis nisl in pulvinar tempus. Maecenas eu enim justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi efficitur auctor justo vitae finibus. Duis euismod lacus at massa rhoncus eleifend. Morbi hendrerit ut libero egestas pellentesque. Nullam pulvinar metus nec augue lobortis, quis sodales tortor vestibulum. Ut consectetur semper placerat. Nam lectus urna, lobortis sed blandit in, semper eu enim. Fusce quam nisi, consequat quis nibh ac, faucibus gravida neque. Suspendisse posuere ligula dui, eu vulputate dolor pulvinar ac. Vestibulum accumsan dictum mauris et luctus. Phasellus id maximus mauris.</p>" +
    "<p>Pellentesque pretium suscipit erat. Suspendisse ex ligula, eleifend eu commodo quis, laoreet in risus. In mollis eleifend dui, nec aliquam elit bibendum pharetra. Nulla ullamcorper blandit justo, sed varius nisi vehicula id. Integer neque eros, egestas et eros ac, mattis vestibulum erat. Cras vel molestie sem. Integer non eros dignissim diam suscipit imperdiet a at metus. Vestibulum tincidunt nunc quam, et cursus ante tincidunt eu. Suspendisse varius, felis et vulputate tempus, augue lacus euismod purus, in ornare nunc metus ut est. Donec in aliquam ante, nec elementum sapien. Morbi a fringilla elit.</p>" + 
    "</div>";
  }

}
