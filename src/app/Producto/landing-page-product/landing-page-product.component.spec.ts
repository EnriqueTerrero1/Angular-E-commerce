import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageProductComponent } from './landing-page-product.component';

describe('LandingPageProductComponent', () => {
  let component: LandingPageProductComponent;
  let fixture: ComponentFixture<LandingPageProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
