import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsThemeComponent } from './details-theme.component';

describe('DetailsThemeComponent', () => {
  let component: DetailsThemeComponent;
  let fixture: ComponentFixture<DetailsThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsThemeComponent]
    });
    fixture = TestBed.createComponent(DetailsThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
