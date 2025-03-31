import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessosListaComponent } from './processos-lista.component';


describe('ProcessosListaComponent', () => {
  let component: ProcessosListaComponent;
  let fixture: ComponentFixture<ProcessosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
