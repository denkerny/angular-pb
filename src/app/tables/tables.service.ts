import { Injectable } from '@angular/core';
import { TABLES } from './models/tables-mock';
import { Observable } from 'rxjs/Observable';
import { Table } from './models/Table';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TablesService {

  tables = TABLES

  constructor() { }

  getList():Observable<Table[]>{
    return of(TABLES)
  }
}
