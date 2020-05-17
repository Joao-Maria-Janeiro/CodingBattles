import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperMainMenuComponent } from './upper-main-menu.component';

describe('UpperMainMenuComponent', () => {
  let component: UpperMainMenuComponent;
  let fixture: ComponentFixture<UpperMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
