import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvenDetailsComponent } from './sven-details.component';

describe('SvenDetailsComponent', () => {
  let component: SvenDetailsComponent;
  let fixture: ComponentFixture<SvenDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvenDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
