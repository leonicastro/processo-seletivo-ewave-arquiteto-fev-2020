import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../../shared/shared.module';
import { AlertComponent } from './components/alert/alert.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
