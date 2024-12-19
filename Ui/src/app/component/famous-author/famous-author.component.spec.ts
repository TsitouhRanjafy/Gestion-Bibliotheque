import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousAuthorComponent } from './famous-author.component';

describe('FamousAuthorComponent', () => {
  let component: FamousAuthorComponent;
  let fixture: ComponentFixture<FamousAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamousAuthorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamousAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
