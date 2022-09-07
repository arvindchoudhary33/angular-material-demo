import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

export interface subject {
  name: string;
}

@Component({
  selector: 'app-chips-eg',
  templateUrl: './chips-eg.component.html',
  styleUrls: ['./chips-eg.component.scss'],
})
export class ChipsEgComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  Subjects: subject[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.Subjects.push({ name: value });
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: subject): void {
    const index = this.Subjects.indexOf(fruit);

    if (index >= 0) {
      this.Subjects.splice(index, 1);
    }
  }

  // availableColors: ChipColor[] = [
  //   { name: 'none', color: undefined },
  //   { name: 'Primary', color: 'primary' },
  //   { name: 'Accent', color: 'accent' },
  //   { name: 'Warn', color: 'warn' },
  // ];
}
