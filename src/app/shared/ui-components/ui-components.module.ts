import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RatingStarComponent } from './rating-star/rating-star.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pageNotFound/page-not-found.component';
import { LoadMoreComponent } from './load-more/load-more.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    ModalModule.forRoot(),
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
    RatingStarComponent,
    ConfirmModalComponent,
    PageNotFoundComponent,
    LoadMoreComponent,
  ],
  entryComponents: [
    ConfirmModalComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
    RatingStarComponent,
    ConfirmModalComponent,
    LoadMoreComponent,
  ],
})
export class UiComponentsModule { }
