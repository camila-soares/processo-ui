import { LayoutComponent } from '../layout/layout.component';
import { ProcessosFormComponent } from './processos-form/processos-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessosListaComponent } from './processos-lista/processos-lista.component';
import { ProcessosVisualizaComponent } from './processos-visualiza/processos-visualiza.component';

const routes: Routes = [
  { path: 'processos', component: LayoutComponent, children: [
    { path: 'form', component: ProcessosFormComponent},
    { path: 'form/:id', component: ProcessosFormComponent},
    {path: 'visualisa/:id', component: ProcessosVisualizaComponent},
    { path: 'lista', component: ProcessosListaComponent},
    { path: '', redirectTo: '/processos/lista', pathMatch: 'full' }
  ] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessosRoutingModule { }
