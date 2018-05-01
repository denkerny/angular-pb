import { Component, OnInit } from '@angular/core';
import { TABLES } from '../models/tables-mock';
import { TablesService } from '../tables.service';
import { Table } from '../models/Table';
import { Observable } from 'rxjs/Observable';
import { Goal } from '../models/Goal';


@Component({
  selector: 'app-tables-container',
  templateUrl: './tables-container.component.html',
  styleUrls: ['./tables-container.component.css']
})
export class TablesContainerComponent implements OnInit {

  tables$: Observable<Table[]>


  constructor(private tablesService: TablesService) { }

  ngOnInit() {
    this.tables$ = this.tablesService.getList();
  }

}
