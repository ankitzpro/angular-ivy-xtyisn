import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RupeePaiseComponent } from './rupee-paise.component';

describe('RupeePaiseComponent', () => {
  let component: RupeePaiseComponent;
  let fixture: ComponentFixture<RupeePaiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RupeePaiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RupeePaiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
