import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() { }

  programRouterLink = [
    {
      programLink: 'evenOdd',
      programName: 'Even/Odd',
    },

    {
      programLink: 'factorial',
      programName: 'Factorial',
    },
    {
      programLink: 'fibonacci',
      programName: 'Fibonacci',
    },
    {
      programLink: 'toggleButton',
      programName: 'Toggle button',
    },
    {
      programLink: 'chips',
      programName: 'Chips demo',
    },
    {
      programLink: 'datePicker',
      programName: 'Date Picker',
    },
  ];
  toggleDarkTheme(): void {
    console.log('hey dark theme');
    // var mainContainer = document.querySelector('.mainContainer');
    // mainContainer!.classList.toggle('dark-theme');
    document.body.classList.toggle('dark-theme');
    console.log(document.body.classList);
  }
  isDarkMode: boolean = false;

  ngOnInit(): void { }
}
