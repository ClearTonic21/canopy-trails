import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leaf } from './leaf';

describe('Leaf', () => {
  let component: Leaf;
  let fixture: ComponentFixture<Leaf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leaf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leaf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
