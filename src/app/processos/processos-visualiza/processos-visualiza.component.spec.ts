import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosVisualizaComponent } from './processos-visualiza.component';

describe('ProcessosVisualizaComponent', () => {
  let component: ProcessosVisualizaComponent;
  let fixture: ComponentFixture<ProcessosVisualizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessosVisualizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessosVisualizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
