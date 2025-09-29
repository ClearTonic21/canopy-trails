import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPort } from './view-port';

describe('ViewPort', () => {
  let component: ViewPort;
  let fixture: ComponentFixture<ViewPort>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPort]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPort);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
