import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  openSM(contenido){
    this.modal.open(contenido, {size: 'sm'});
  }
  // tslint:disable-next-line:typedef
  openLG(contenido){
    this.modal.open(contenido, {size: 'lg'});
  }
  // tslint:disable-next-line:typedef
  openXL(contenido){
    this.modal.open(contenido, {size: 'xl'});
  }
  // tslint:disable-next-line:typedef
  openCentrado(contenido){
    this.modal.open(contenido, {centered: true});
  }
  // tslint:disable-next-line:typedef
  openScroll(contenido){
    this.modal.open(contenido, {scrollable: true});
  }
  // tslint:disable-next-line:typedef
  openBackground(contenido){
    this.modal.open(contenido, {backdropClass: 'azul'});
  }
  // tslint:disable-next-line:typedef
  openWindow(contenido){
    this.modal.open(contenido, {windowClass: 'oscuro'});
  }
}
