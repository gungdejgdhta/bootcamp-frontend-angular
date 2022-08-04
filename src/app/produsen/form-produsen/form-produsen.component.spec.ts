import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProdusenComponent } from './form-produsen.component';

describe('FormProdusenComponent', () => {
  let component: FormProdusenComponent;
  let fixture: ComponentFixture<FormProdusenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProdusenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProdusenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
