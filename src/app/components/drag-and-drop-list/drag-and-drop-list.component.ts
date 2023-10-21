import { Component } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-drag-and-drop-list',
  templateUrl: './drag-and-drop-list.component.html',
  styleUrls: ['./drag-and-drop-list.component.scss'],
})
export class DragAndDropListComponent {
  programmingLanguages = [
    'C',
    'C++',
    'Java',
    'JavaScript',
    'Python',
    'PHP',
    'Go',
    'Swift',
    'Ruby',
    'Dart',
    'Kotlin',
    'Rust',
    'Scala',
    'TypeScript',
    'R',
    'Julia',
    'Haskell',
    'Perl',
    'Lua',
    'Elixir',
    'Clojure',
    'Groovy',
    'Erlang',
    'F#',
    'OCaml',
    'Scheme',
    'Fortran',
    'Bash',
    'Assembly',
    'Cobol',
    'Visual Basic',
    'RPG',
    'PL/1',
    'Ada',
    'Lisp',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.programmingLanguages, event.previousIndex, event.currentIndex);
  }

}
