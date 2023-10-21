import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragAndDropListComponent } from './components/drag-and-drop-list/drag-and-drop-list.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { AsyncPipe, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutoCompleteInputComponent } from './components/auto-complete-input/auto-complete-input.component';

@NgModule({
  declarations: [
    AppComponent,
    DragAndDropListComponent,
    AutoCompleteInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkDropList,
    NgFor,
    CdkDrag,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
