import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageCarritoComponent } from './landing-page-carrito.component';

describe('LandingPageCarritoComponent', () => {
  let component: LandingPageCarritoComponent;
  let fixture: ComponentFixture<LandingPageCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
