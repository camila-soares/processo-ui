import { Observable } from 'rxjs';

import { ProcessosService } from '../../processos.service';
import { Processo } from '../processos';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-processos-form',
  templateUrl: './processos-form.component.html',
  styleUrls: ['./processos-form.component.css']
})
export class ProcessosFormComponent implements OnInit {

  processo: Processo;
  estadoSelecionado = '';
  success: boolean = false;
  errors: String[];
  id: number;
  selectedFile: File | null = null;
  message: string = '';
  estados = [
    { nome: 'Acre', sigla: 'AC' },
    { nome: 'Alagoas', sigla: 'AL' },
    { nome: 'Amazonas', sigla: 'AM' },
    { nome: 'Bahia', sigla: 'BA' },
    { nome: 'Ceará', sigla: 'CE' },
    { nome: 'Distrito Federal', sigla: 'DF' },
    { nome: 'Espírito Santo', sigla: 'ES' },
    { nome: 'Goiás', sigla: 'GO' },
    { nome: 'Maranhão', sigla: 'MA' },
    { nome: 'Mato Grosso', sigla: 'MT' },
    { nome: 'Mato Grosso do Sul', sigla: 'MS' },
    { nome: 'Minas Gerais', sigla: 'MG' },
    { nome: 'Pará', sigla: 'PA' },
    { nome: 'Paraíba', sigla: 'PB' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Pernambuco', sigla: 'PE' },
    { nome: 'Piauí', sigla: 'PI' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Rio Grande do Norte', sigla: 'RN' },
    { nome: 'Rio Grande do Sul', sigla: 'RS' },
    { nome: 'Rondônia', sigla: 'RO' },
    { nome: 'Roraima', sigla: 'RR' },
    { nome: 'Santa Catarina', sigla: 'SC' },
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Sergipe', sigla: 'SE' },
    { nome: 'Tocantins', sigla: 'TO' }
  ];
  cidades: any[] = [];
  constructor(private service: ProcessosService, private http: HttpClient, 
              private router: Router, 
              private activeRoute: ActivatedRoute) { 
      this.processo = new Processo();
      this.processo.uf = this.estadoSelecionado;
  }
  
  ngOnInit() {
    this.onChangeUf()
    let params : Observable<Params> = this.activeRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id) {
        this.service.getProcessoById(this.id)
        .subscribe(response => this.processo = response,
        erroResponse => this.processo = new Processo()
      );
      }
    })
  }
   onChangeUf(){
      this.service.getLocalidade(this.processo.uf)
      .subscribe( data => {
        this.cidades = data;
        this.cidades.forEach((item: string) =>{
          
        })
        console.log('CCCCCCCC', this.cidades[0].nome)
      })
   }

   onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }


  // onUpload(): void {
  //   if (this.selectedFile) {
  //     const formData = new FormData();
  //     formData.append('file', this.selectedFile);

  //     this.http.post('http://localhost:3000/upload', formData).subscribe(
  //       (response) => {
  //         console.log('Upload success', response);
  //         this.message = 'File uploaded successfully!';
  //       },
  //       (error) => {
  //         console.error('Upload error', error);
  //         this.message = 'File upload failed!';
  //       }
  //     );
  //   }
  // }


  onSubmit(){
    if(this.id ){
      this.service.updateProcesso(this.processo, this.selectedFile)
      .subscribe( 
        response => {
          this.success = true;
          this.errors = null;
        }, erroResponse => {
          this.errors = ['Erro ao atualizar'];
        });
    }else {
      this.service.salvar(this.processo, this.selectedFile)
      .subscribe( response => {
      this.success = true;
      this.errors = null;
      } , errorResponse => {
      this.success = false;
        this.errors = errorResponse.error.errors;
      })
    }
  }
  

  updateProcesso() {
    this.service.updateProcesso(this.processo, this.selectedFile)
    .subscribe( 
      response => {
        this.errors = null;
      }, erroResponse => {
        this.errors = ['Erro ao atualizar'];
      });
  }

  voltar() {
    this.router.navigate(['/processos/lista'])
  }

}


