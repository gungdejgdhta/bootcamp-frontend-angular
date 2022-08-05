import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransaksiComponent } from './list-transaksi.component';

describe('ListTransaksiComponent', () => {
  let component: ListTransaksiComponent;
  let fixture: ComponentFixture<ListTransaksiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTransaksiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
