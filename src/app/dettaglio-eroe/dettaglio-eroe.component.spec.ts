import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioEroeComponent } from './dettaglio-eroe.component';

describe('DettaglioEroeComponent', () => {
  let component: DettaglioEroeComponent;
  let fixture: ComponentFixture<DettaglioEroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioEroeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DettaglioEroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
