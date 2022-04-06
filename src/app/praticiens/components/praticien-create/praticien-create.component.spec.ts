import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticienCreateComponent } from './praticien-create.component';

describe('PraticienCreateComponent', () => {
  let component: PraticienCreateComponent;
  let fixture: ComponentFixture<PraticienCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PraticienCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticienCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
