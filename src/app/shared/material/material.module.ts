import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';


const material = [
  MatCardModule,
  MatInputModule,
  MatSliderModule,
  MatButtonModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
