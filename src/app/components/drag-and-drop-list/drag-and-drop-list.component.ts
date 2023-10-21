import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-drag-and-drop-list',
  templateUrl: './drag-and-drop-list.component.html',
  styleUrls: ['./drag-and-drop-list.component.scss'],
})
export class DragAndDropListComponent {
  @Input() items: string[] = [];

  @Output() removeItem: EventEmitter<number> = new EventEmitter<number>();

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

  handleRemoveItem(index: number): void {
    this.removeItem.emit(index);
  }

}
