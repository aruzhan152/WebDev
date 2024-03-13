import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SculptorpageComponent } from './sculptorpage.component';

describe('SculptorpageComponent', () => {
  let component: SculptorpageComponent;
  let fixture: ComponentFixture<SculptorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SculptorpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SculptorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
