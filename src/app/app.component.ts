import { Component, OnInit } from '@angular/core';
import { ListDialogComponent } from './list-dialog/list-dialog.component';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import { Cardlist } from './models/cardlist'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jpmc-assignment';
  cardLists: Cardlist[] = []
  cardList: Cardlist

  constructor(public dialog: MatDialog) {}

  openListDialog(): void {
    const dialogRef = this.dialog.open(ListDialogComponent, {
      width: '350px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        this.cardLists.push({id: this.cardLists.length + 1, listName: result, cardName: []})
      }
    });
  }

  ngOnInit(){
    this.cardList = {
      id: 1,
      listName: 'To Do',
      cardName: ['Make grocery list', 'Pay electricity bill']
    }
    this.cardLists.push(this.cardList)
  }

  openCardDialog(listName: Cardlist): void {
    const dialogRef = this.dialog.open(CardDialogComponent, {
      width: '350px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        const list = this.cardLists.filter((list) => list.id === listName.id)
        if(list.length > 0){
          list[0].cardName.push(result)
        }
      }
    });
  }

}
