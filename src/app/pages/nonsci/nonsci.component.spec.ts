import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonsciComponent } from './nonsci.component';

describe('NonsciComponent', () => {
  let component: NonsciComponent;
  let fixture: ComponentFixture<NonsciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonsciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonsciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
