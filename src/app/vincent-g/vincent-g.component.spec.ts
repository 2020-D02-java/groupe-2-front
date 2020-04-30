import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VincentGComponent } from './vincent-g.component';

describe('VincentGComponent', () => {
  let component: VincentGComponent;
  let fixture: ComponentFixture<VincentGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VincentGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VincentGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
