import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragAndDropListComponent } from './components/drag-and-drop-list/drag-and-drop-list.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DragAndDropListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkDropList,
    NgFor,
    CdkDrag
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
