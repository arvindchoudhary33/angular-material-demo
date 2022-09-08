import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { FactorialNumComponent } from './factorial-num/factorial-num.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FibonacciComponent } from './fibonacci/fibonacci.component';
import { MatCardModule } from '@angular/material/card';
import { ToggleButtonEgComponent } from './toggle-button-eg/toggle-button-eg.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChipsEgComponent } from './chips-eg/chips-eg.component';
import { MatChipsModule } from '@angular/material/chips';
import { DatePickerEgComponent } from './date-picker-eg/date-picker-eg.component';
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    EvenOddComponent,
    FactorialNumComponent,
    FibonacciComponent,
    ChipsEgComponent,
    ToggleButtonEgComponent,
    DatePickerEgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatRippleModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
