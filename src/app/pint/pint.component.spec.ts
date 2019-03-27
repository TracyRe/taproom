import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PintComponent } from './pint.component';

describe('PintComponent', () => {
  let component: PintComponent;
  let fixture: ComponentFixture<PintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
