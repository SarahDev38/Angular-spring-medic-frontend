import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticienListComponent } from './praticien-list.component';

describe('PraticienListComponent', () => {
  let component: PraticienListComponent;
  let fixture: ComponentFixture<PraticienListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraticienListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
