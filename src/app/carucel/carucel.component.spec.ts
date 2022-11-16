import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarucelComponent } from './carucel.component';

describe('CarucelComponent', () => {
  let component: CarucelComponent;
  let fixture: ComponentFixture<CarucelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarucelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarucelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
