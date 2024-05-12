import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionEditorialComponent } from './creacion-editorial.component';

describe('CreacionEditorialComponent', () => {
  let component: CreacionEditorialComponent;
  let fixture: ComponentFixture<CreacionEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionEditorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreacionEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
