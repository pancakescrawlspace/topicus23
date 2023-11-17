import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoppelingEigenschappenComponent } from './koppeling-eigenschappen.component';

describe('KoppelingEigenschappenComponent', () => {
  let component: KoppelingEigenschappenComponent;
  let fixture: ComponentFixture<KoppelingEigenschappenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoppelingEigenschappenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KoppelingEigenschappenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
