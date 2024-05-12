import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionSucursalComponent } from './creacion-sucursal.component';

describe('CreacionSucursalComponent', () => {
  let component: CreacionSucursalComponent;
  let fixture: ComponentFixture<CreacionSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionSucursalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreacionSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
