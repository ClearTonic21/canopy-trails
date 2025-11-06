import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderviewFooter } from './underview-footer';

describe('UnderviewFooter', () => {
  let component: UnderviewFooter;
  let fixture: ComponentFixture<UnderviewFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderviewFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderviewFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
