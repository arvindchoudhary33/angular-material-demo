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
      programLink: 'datepicker',
      programName: 'Date Picker',
    },
    {
      programLink: 'chips',
      programName: 'Chips demo',
    },
  ];

  isDarkMode: boolean = false;

  ngOnInit(): void { }
}
