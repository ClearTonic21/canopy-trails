import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanopySettings } from './canopy-settings';

describe('CanopySettings', () => {
  let component: CanopySettings;
  let fixture: ComponentFixture<CanopySettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanopySettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanopySettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
