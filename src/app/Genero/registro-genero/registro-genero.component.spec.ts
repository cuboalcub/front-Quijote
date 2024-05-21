import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroGeneroComponent } from './registro-genero.component';

describe('RegistroGeneroComponent', () => {
  let component: RegistroGeneroComponent;
  let fixture: ComponentFixture<RegistroGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroGeneroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
