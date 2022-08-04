import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProdukComponent } from './list-produk.component';

describe('ListProdukComponent', () => {
  let component: ListProdukComponent;
  let fixture: ComponentFixture<ListProdukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProdukComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProdukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
