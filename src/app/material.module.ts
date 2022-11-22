import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
	MatDialog,
	MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [
    MatDialog,
		{ 
      provide: MatDialogRef,
      useValue: []
       }, 
      { 
      provide: MAT_DIALOG_DATA, 
      useValue: [] 
      }
  ]
})
export class MaterialModule { }
