import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SucursaleComponent } from './sucursale.component';

describe('SucursaleComponent', () => {
  let component: SucursaleComponent;
  let fixture: ComponentFixture<SucursaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucursaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SucursaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
