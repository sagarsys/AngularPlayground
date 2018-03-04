import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteToggleComponent } from './vote-toggle.component';

describe('VoteToggleComponent', () => {
  let component: VoteToggleComponent;
  let fixture: ComponentFixture<VoteToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
