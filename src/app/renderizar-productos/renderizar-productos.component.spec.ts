import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderizarProductosComponent } from './renderizar-productos.component';

describe('RenderizarProductosComponent', () => {
  let component: RenderizarProductosComponent;
  let fixture: ComponentFixture<RenderizarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderizarProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderizarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
