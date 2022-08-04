import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProdusenComponent } from './list-produsen.component';

describe('ListProdusenComponent', () => {
  let component: ListProdusenComponent;
  let fixture: ComponentFixture<ListProdusenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProdusenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProdusenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
