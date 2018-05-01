import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApisContainerComponent } from './apis-container/apis-container.component';
import { ApiP24CurrencyComponent } from './api-p24-currency/api-p24-currency.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatTableModule } from '@angular/material';




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
  ],
  declarations: [ApisContainerComponent, ApiP24CurrencyComponent],
  exports: [ApisContainerComponent]
})
export class ApisModule { }
