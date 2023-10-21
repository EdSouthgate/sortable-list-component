import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-auto-complete-input',
  templateUrl: './auto-complete-input.component.html',
  styleUrls: ['./auto-complete-input.component.scss'],

})
export class AutoCompleteInputComponent implements OnInit {
  myControl = new FormControl('');
  filteredOptions?: Observable<string[]>;
  @Input() options!: string[];
  @Output() optionSelected: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  selectOption(): void {
    if(this.myControl.value) {
      this.optionSelected.emit(this.myControl.value);
      this.myControl.setValue('');
    }

  }

}
