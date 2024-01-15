// layouts.module.ts

import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    // Add other layout components here
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    // Add other layout components here
  ],
})
export class LayoutsModule { }
