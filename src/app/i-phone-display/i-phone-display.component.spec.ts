import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPhoneDisplayComponent } from './i-phone-display.component';

describe('IPhoneDisplayComponent', () => {
  let component: IPhoneDisplayComponent;
  let fixture: ComponentFixture<IPhoneDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPhoneDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IPhoneDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
