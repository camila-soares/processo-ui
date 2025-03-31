import { PaginationComponent } from '../pagination/pagination.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessosFormComponent } from './processos-form/processos-form.component';
import { FormsModule} from '@angular/forms';
import { AngularPaginatorModule } from 'angular-paginator';
import { ProcessosListaComponent } from './processos-lista/processos-lista.component';
import { ProcessosRoutingModule } from './processos-routing.module';



@NgModule({
  declarations: [ProcessosFormComponent, ProcessosListaComponent, PaginationComponent],
  imports: [
    CommonModule,
    ProcessosFormComponent,
    ProcessosModule,
    FormsModule,
    AngularPaginatorModule

  ],
  exports: [ProcessosFormComponent, ProcessosListaComponent, ProcessosRoutingModule]
})
export class ProcessosModule { }
