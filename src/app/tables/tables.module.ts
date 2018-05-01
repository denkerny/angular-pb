import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesContainerComponent } from './tables-container/tables-container.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule, MatTableModule } from '@angular/material';
import { TablesService } from './tables.service';
import { TableComponent } from './table/table.component';



@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,

  ],
  declarations: [TablesContainerComponent, TableComponent],
  exports: [TablesContainerComponent],
  providers: [TablesService]
})
export class TablesModule { }
