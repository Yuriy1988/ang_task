import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiComponentsModule } from './ui-components/ui-components.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    UiComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
  exports: [
    CommonModule,
    UiComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
})
export class SharedModule { }
