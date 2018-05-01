import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApisContainerComponent } from './apis-container.component';

describe('ApisContainerComponent', () => {
  let component: ApisContainerComponent;
  let fixture: ComponentFixture<ApisContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApisContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApisContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
