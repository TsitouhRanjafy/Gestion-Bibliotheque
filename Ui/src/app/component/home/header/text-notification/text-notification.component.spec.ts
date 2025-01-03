import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextNotificationComponent } from './text-notification.component';

describe('TextNotificationComponent', () => {
  let component: TextNotificationComponent;
  let fixture: ComponentFixture<TextNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
