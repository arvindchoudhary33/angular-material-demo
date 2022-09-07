import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-odd',
  templateUrl: './even-odd.component.html',
  styleUrls: ['./even-odd.component.scss'],
})
export class EvenOddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  evenOddString = '';
  evenOdd(num: string) {
    let num_: number;
    if (num == '') {
      this.evenOddString = 'Error';
    } else {
      console.log(parseInt('ab'));
      if (parseInt(num) == NaN) {
        this.evenOddString = 'Error';
      } else {
        num_ = parseInt(num);
        if (num_ % 2 == 0) {
          this.evenOddString = 'Even';
        } else {
          this.evenOddString = 'Odd';
        }
      }
    }
  }
}
