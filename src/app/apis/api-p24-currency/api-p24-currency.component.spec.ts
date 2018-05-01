import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiP24CurrencyComponent } from './api-p24-currency.component';

describe('ApiP24CurrencyComponent', () => {
  let component: ApiP24CurrencyComponent;
  let fixture: ComponentFixture<ApiP24CurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiP24CurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiP24CurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
