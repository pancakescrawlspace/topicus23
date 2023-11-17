import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoppelingRegelComponent } from './koppeling-regel.component';

describe('KoppelingRegelComponent', () => {
  let component: KoppelingRegelComponent;
  let fixture: ComponentFixture<KoppelingRegelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoppelingRegelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KoppelingRegelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
