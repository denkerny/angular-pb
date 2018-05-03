import { Injectable } from '@angular/core';
import { Currency } from '../models/Currency';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CurrencyService {


  constructor(private http: HttpClient) { }



  getCurrency(): Observable<Currency[]>{
    return this.http.get<Currency[]>('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
  }

}
