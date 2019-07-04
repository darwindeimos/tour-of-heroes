import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
