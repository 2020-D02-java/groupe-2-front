import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JonathanBioComponent } from './jonathan-bio.component';

describe('JonathanBioComponent', () => {
  let component: JonathanBioComponent;
  let fixture: ComponentFixture<JonathanBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JonathanBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JonathanBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
