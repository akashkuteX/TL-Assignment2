import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCallback.ComponentComponent } from './auth-callback.component.component';

describe('AuthCallback.ComponentComponent', () => {
  let component: AuthCallback.ComponentComponent;
  let fixture: ComponentFixture<AuthCallback.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthCallback.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCallback.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
