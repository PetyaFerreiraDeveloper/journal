import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EntryLabelComponent } from './entry-label/entry-label.component';



@NgModule({
  declarations: [
    LoaderComponent,
    EntryLabelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    EntryLabelComponent
  ]
})
export class SharedModule { }
