import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProdukComponent } from './form-produk.component';

describe('FormProdukComponent', () => {
  let component: FormProdukComponent;
  let fixture: ComponentFixture<FormProdukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProdukComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormProdukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
