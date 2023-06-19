import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThemeComponent } from './list-theme.component';

describe('ListThemeComponent', () => {
  let component: ListThemeComponent;
  let fixture: ComponentFixture<ListThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListThemeComponent]
    });
    fixture = TestBed.createComponent(ListThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
