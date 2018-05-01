import { Component, OnInit, Input } from '@angular/core';
import { Table } from '../models/Table';
import { Goal } from '../models/Goal';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns = ['goal', 'date']
  goals: Goal[]

  @Input() table: Table

  constructor() { }

  ngOnInit() {
    this.goals = this.table.goals;
  }

}
