import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { ExcelPasteDirective } from './excel-paste.directive';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, GridModule ],
  declarations: [ AppComponent, ExcelPasteDirective ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

