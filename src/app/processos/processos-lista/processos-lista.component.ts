import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Processo } from '../processos';
import { ProcessosService } from 'src/app/processos.service';

@Component({
  selector: 'app-processos-lista',
  templateUrl: './processos-lista.component.html',
  styleUrls: ['./processos-lista.component.css']
})
export class ProcessosListaComponent implements OnInit {

  processos: Processo[] = [];
  processo: Processo;
  mensagemSucesso: string;
  mensagemErro : string;

  processoSelecionado: Processo;
  constructor(
    private service : ProcessosService, 
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getProcessos();
  }
  lista: Processo[] = [];
 

getProcessos() {
  this.service.getProcessos()
  .subscribe( response => {
    this.lista = response;
  });
}

novoCadastro() {
  this.router.navigate(['/processos/form'])
}

  preparaProcesso(processo: Processo) {
    this.processoSelecionado = processo;
  }

  deletar() {
    this.service
    .deleteProcesso(this.processoSelecionado)
    .subscribe( 
      response => { this.mensagemSucesso = 'Processo deletado com sucesso.'
    },
      erroResponse  => {this.mensagemErro = 'Ocorreu um erro ao deletar'}
    )
      
   console.log(this.processoSelecionado);
  }
  
  
}
