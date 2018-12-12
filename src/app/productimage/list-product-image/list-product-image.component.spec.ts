import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductImageComponent } from './list-product-image.component';

describe('ListProductImageComponent', () => {
  let component: ListProductImageComponent;
  let fixture: ComponentFixture<ListProductImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
