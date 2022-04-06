import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticienSingleComponent } from './praticien-single.component';

describe('PraticienSingleComponent', () => {
  let component: PraticienSingleComponent;
  let fixture: ComponentFixture<PraticienSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraticienSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticienSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
