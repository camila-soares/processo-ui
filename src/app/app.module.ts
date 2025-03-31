import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import {Amplify } from 'aws-amplify';
import { RouterModule } from '@angular/router';
import { ProcessosFormComponent } from './processos/processos-form/processos-form.component';
import { ProcessosService } from './processos.service';
import { ProcessosRoutingModule } from './processos/processos-routing.module';
import { ProcessosListaComponent } from './processos/processos-lista/processos-lista.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProcessosVisualizaComponent } from './processos/processos-visualiza/processos-visualiza.component';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';

Amplify.configure({
    Auth:{
      mandatorySignIn:true,
      region: 'us-east-1',
      userPoolId: 'us-east-1_0CNO3ctC7',
      userPoolWebClientId: '19qmshnekfuv1obg9rfa1dupok',
      authenticationFlowType:'Client credentials'
    }
  });
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProcessosFormComponent,
    ProcessosListaComponent,
    LayoutComponent,
    ProcessosVisualizaComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ProcessosRoutingModule,
    TemplateModule,
    FormsModule,
  ],  
  providers: [
    ProcessosService, 
    {
       provide: HTTP_INTERCEPTORS, 
       useClass: TokenInterceptor,
       multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
