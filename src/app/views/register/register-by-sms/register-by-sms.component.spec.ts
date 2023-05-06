import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBySmsComponent } from './register-by-sms.component';

describe('RegisterBySmsComponent', () => {
  let component: RegisterBySmsComponent;
  let fixture: ComponentFixture<RegisterBySmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBySmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBySmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
