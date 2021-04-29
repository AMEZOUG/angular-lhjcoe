import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {
  MatInputModule, MatListModule, MatPaginatorModule, MatProgressSpinnerModule, MatSidenavModule, MatSortModule, MatCheckboxModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule,
   MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
