import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTransaksiComponent } from './form-transaksi.component';

describe('FormTransaksiComponent', () => {
  let component: FormTransaksiComponent;
  let fixture: ComponentFixture<FormTransaksiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTransaksiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
