import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Observable } from 'rxjs/Observable';
import { Currency } from '../models/Currency';

@Component({
  selector: 'app-api-p24-currency',
  templateUrl: './api-p24-currency.component.html',
  styleUrls: ['./api-p24-currency.component.css'],
  providers: [CurrencyService]
})
export class ApiP24CurrencyComponent implements OnInit {
  currency$: Observable<Currency[]>
  displayedColumns: ['buy', 'sale', 'ccy']

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currency$ = this.currencyService.getCurrency();
  }


}
