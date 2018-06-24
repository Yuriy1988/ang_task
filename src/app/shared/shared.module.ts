import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsModule } from './ui-components/ui-components.module';

@NgModule({
  imports: [
    CommonModule,
    UiComponentsModule,
  ],
  exports: [
    UiComponentsModule
  ]
})
export class SharedModule { }
