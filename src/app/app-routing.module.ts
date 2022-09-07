import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChipsEgComponent } from './chips-eg/chips-eg.component';
import { DatePickerEgComponent } from './date-picker-eg/date-picker-eg.component';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { FactorialNumComponent } from './factorial-num/factorial-num.component';
import { FibonacciComponent } from './fibonacci/fibonacci.component';

const routes: Routes = [
  { path: 'evenOdd', component: EvenOddComponent },
  { path: 'factorial', component: FactorialNumComponent },
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'datepicker', component: DatePickerEgComponent },
  { path: 'chips', component: ChipsEgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
