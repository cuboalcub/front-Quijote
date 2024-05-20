import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarGeneroComponent } from './modificar-genero.component';

describe('ModificarGeneroComponent', () => {
  let component: ModificarGeneroComponent;
  let fixture: ComponentFixture<ModificarGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarGeneroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
