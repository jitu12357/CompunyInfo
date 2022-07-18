import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployInfoComponent } from './employ-info.component';

describe('EmployInfoComponent', () => {
  let component: EmployInfoComponent;
  let fixture: ComponentFixture<EmployInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
