import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeContainerComponent } from './about-me-container/about-me-container.component';
import { FlexLayoutModule } from "@angular/flex-layout"

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [AboutMeContainerComponent],
  exports: [AboutMeContainerComponent]
})
export class AboutMeModule { }
