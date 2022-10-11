import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsUserComponent } from './dropdowns-user.component';

describe('DropdownsUserComponent', () => {
  let component: DropdownsUserComponent;
  let fixture: ComponentFixture<DropdownsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
