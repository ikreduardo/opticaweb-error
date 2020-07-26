import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private modal: NgbModal) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  openCentrado(contenido){
    this.modal.open(contenido, {centered: true});
  }
    // tslint:disable-next-line:typedef
  openSM(contenido){
    this.modal.open(contenido, {size: 'sm'});
  }
}
