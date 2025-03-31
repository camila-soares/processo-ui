import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProcessosFormComponent } from './processos/processos-form/processos-form.component';
import { ProcessosVisualizaComponent } from './processos/processos-visualiza/processos-visualiza.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
   { path : 'home', component: HomeComponent },
    { path: 'processos/form/', component: ProcessosFormComponent },
    {path: 'processos/visualiza/:id', component: ProcessosVisualizaComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
