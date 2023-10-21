import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sortable-list-component';

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

  handleOptionSelected(option: string): void {
    if(option) {
      this.selectedLanguages.push(option);
    }
  }

}
