import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { ListDialogComponent } from './list-dialog/list-dialog.component';
import { CardDialogComponent } from './card-dialog/card-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ListDialogComponent,
    CardDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [ListDialogComponent, CardDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
