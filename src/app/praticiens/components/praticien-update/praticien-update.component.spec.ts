import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticienUpdateComponent } from './praticien-update.component';

describe('PraticienUpdateComponent', () => {
  let component: PraticienUpdateComponent;
  let fixture: ComponentFixture<PraticienUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraticienUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticienUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
