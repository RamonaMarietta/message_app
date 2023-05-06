import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBySmsComponent } from './login-by-sms.component';

describe('LoginBySmsComponent', () => {
  let component: LoginBySmsComponent;
  let fixture: ComponentFixture<LoginBySmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBySmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBySmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
