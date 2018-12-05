import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvenProductsComponent } from './sven-products.component';

describe('SvenProductsComponent', () => {
  let component: SvenProductsComponent;
  let fixture: ComponentFixture<SvenProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvenProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvenProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
