import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsModule } from './ui-components/ui-components.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    UiComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
  exports: [
    UiComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
})
export class SharedModule { }
