import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sortable-list-component';

  /* Todo
  * - create api
  * - move to a service and refactor to use RxJS
  * - add tests
  * - make it look more like the designs
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

  suggestedLanguages = this.programmingLanguages.slice(0, 5);

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
    this.suggestedLanguages = this.remainingLanguages.slice(0, 5);
  }
}
