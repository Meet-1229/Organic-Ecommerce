import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryProductsComponent } from './catagory-products.component';

describe('CatagoryProductsComponent', () => {
  let component: CatagoryProductsComponent;
  let fixture: ComponentFixture<CatagoryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoryProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
