import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBioJSComponent } from './page-bio-js.component';

describe('PageBioJSComponent', () => {
  let component: PageBioJSComponent;
  let fixture: ComponentFixture<PageBioJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBioJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBioJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
