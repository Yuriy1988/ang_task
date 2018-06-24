import { ToolboxComponent } from './toolbox/toolbox.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
  ]
})
export class UiComponentsModule { }
