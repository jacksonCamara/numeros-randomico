import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiagoComponent } from './thiago.component';

describe('ThiagoComponent', () => {
  let component: ThiagoComponent;
  let fixture: ComponentFixture<ThiagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThiagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
