import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionPrestamosComponent } from './creacion-prestamos.component';

describe('CreacionPrestamosComponent', () => {
  let component: CreacionPrestamosComponent;
  let fixture: ComponentFixture<CreacionPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionPrestamosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreacionPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
