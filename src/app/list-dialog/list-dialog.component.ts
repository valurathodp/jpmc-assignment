import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.css']
})
export class ListDialogComponent implements OnInit {
  listName: string
  constructor(
    public dialogRef: MatDialogRef<ListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data)
  }

}
