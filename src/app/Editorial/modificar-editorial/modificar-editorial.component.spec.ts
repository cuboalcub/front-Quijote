import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEditorialComponent } from './modificar-editorial.component';

describe('ModificarEditorialComponent', () => {
  let component: ModificarEditorialComponent;
  let fixture: ComponentFixture<ModificarEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarEditorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModificarEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
