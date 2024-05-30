import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSucursalComponent } from './modificar-sucursal.component';

describe('ModificarSucursalComponent', () => {
  let component: ModificarSucursalComponent;
  let fixture: ComponentFixture<ModificarSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarSucursalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
