import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeContainerComponent, ModalWork1 } from './about-me-container/about-me-container.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SlideshowModule } from 'ng-simple-slideshow';
import { MatDialogModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SlideshowModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  declarations: [AboutMeContainerComponent, ModalWork1],
  exports: [AboutMeContainerComponent],
  entryComponents: [ModalWork1]
})
export class AboutMeModule {
  

 }
