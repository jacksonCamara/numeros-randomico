import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorRandomicoComponent } from './gerador-randomico.component';

describe('GeradorRandomicoComponent', () => {
  let component: GeradorRandomicoComponent;
  let fixture: ComponentFixture<GeradorRandomicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeradorRandomicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeradorRandomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
