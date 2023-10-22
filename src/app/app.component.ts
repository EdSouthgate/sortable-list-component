import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'sortable-list-component';

  /* Todo
  * - create api
  * - move to a service and refactor to use RxJS
  * - add tests
  * - make it look more like the designs
  * - randomize suggested languages or find some other way of selecting them
  * - after refactoring to use ngRx change detection strategy can be set to OnPush
  */
  programmingLanguages = [
    'Assembly',
    'Ada',
    'ALGOL',
    'Bash',
    'Basic',
    'C',
    'C++',
    'C#',
    'COBOL',
    'Dart',
    'Delphi',
    'Eiffel',
    'Elixir',
    'Elm',
    'Erlang',
    'F#',
    'Forth',
    'Fortran',
    'Go',
    'Groovy',
    'Haskell',
    'HTML/CSS', //(though not typically considered 'programming' languages)",
    'Java',
    'JavaScript',
    'Julia',
    'Kotlin',
    'Lisp',
    'Lua',
    'MATLAB',
    'Objective-C',
    'Pascal',
    'Perl',
    'PHP',
    'Prolog',
    'Python',
    'R',
    'Ruby',
    'Rust',
    'Scala',
    'Scheme',
    'Shell',
    'SQL',
    'Swift',
    'TypeScript',
    'VBA',
    'VHDL',
    'Visual Basic .NET',
  ];

  selectedLanguages: string[] = [];

  remainingLanguages: string[] = Object.assign([], this.programmingLanguages);

  suggestedLanguages: string[] = [];

  ngOnInit() {
    this.updateSuggestedLanguages();
  }

  handleOptionSelected(option: string): void {
    if(option) {
      this.selectedLanguages.push(option);
      this.updateRemainingLanguages();
      this.updateSuggestedLanguages();
    }
  }

  handleRemoveItem(index: number): void {
    this.selectedLanguages.splice(index, 1);
    this.updateRemainingLanguages();
    this.updateSuggestedLanguages();
  }

  updateRemainingLanguages(): void {
    this.remainingLanguages = this.programmingLanguages.filter((language) => {
      return !this.selectedLanguages.includes(language);
    });
  }

  updateSuggestedLanguages(): void {
    let newSuggestedLanguages = [];
    for(let i = 0; i < 5; i++) {
      var randomIndex = Math.floor(Math.random() * this.remainingLanguages.length);
      newSuggestedLanguages.push(this.remainingLanguages[randomIndex]);
    }
    this.suggestedLanguages = newSuggestedLanguages
  }
}
