import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';



@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    ScrollToModule.forRoot()
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class AppCommonModule { }
