import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceScreenComponent } from './conference-screen.component';

describe('ConferenceScreenComponent', () => {
  let component: ConferenceScreenComponent;
  let fixture: ComponentFixture<ConferenceScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
