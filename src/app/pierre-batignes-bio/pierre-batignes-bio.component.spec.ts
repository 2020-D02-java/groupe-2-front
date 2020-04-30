import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PierreBatignesBioComponent } from './pierre-batignes-bio.component';

describe('PierreBatignesBioComponent', () => {
  let component: PierreBatignesBioComponent;
  let fixture: ComponentFixture<PierreBatignesBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PierreBatignesBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PierreBatignesBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
