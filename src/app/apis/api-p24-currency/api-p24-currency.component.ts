import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Observable } from 'rxjs/Observable';
import { Currency } from '../models/Currency';
import { Subscription } from 'rxjs/Subscription';
import { Sort } from '@angular/material';



@Component({
  selector: 'app-api-p24-currency',
  templateUrl: './api-p24-currency.component.html',
  styleUrls: ['./api-p24-currency.component.css'],
  providers: [CurrencyService]
})
export class ApiP24CurrencyComponent implements OnInit, OnDestroy {
  /* currency$: Observable<Currency[]> */

  currency: Currency[]
  subscription: Subscription
  sortedData
  displayedColumns= ['buy', 'sale', 'ccy']

  constructor(private currencyService: CurrencyService) {
    }

  ngOnInit() {
    this.subscription = this.currencyService.getCurrency().subscribe((data) => {
      this.currency = this.sortedData = data;
    })
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  sortData(sort: Sort) {
    const data = this.currency.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'ccy': return compare(a.ccy, b.ccy, isAsc);
        case 'buy': return compare(+a.buy, +b.buy, isAsc);
        case 'sale': return compare(+a.sale, +b.sale, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


