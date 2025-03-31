import { Injectable } from '@angular/core';
import  { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Processo } from './processos/processos';
@Injectable({
  providedIn: 'root'
})
export class ProcessosService {
  constructor(private http: HttpClient) { }
  

  salvar(processo: Processo, files: File) : Observable<any> {
    const formData = new FormData()
    formData.append('files', files)
    return this.http.post(`http://localhost:8093/processo/cria?npu=${processo.npu}&uf=${processo.uf}&municipio=${processo.municipio}`, formData);
  }

  
  getProcessos() : Observable <any[]>{
    return this.http.get<any[]>(`http://localhost:8093/processo/listAll`);
  }

  getLocalidade(uf: string): Observable <any[]>{
    return this.http.get<any[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
  }


  getProcessoById(id: number) : Observable<any>{
    return this.http.get<any>(`http://localhost:8093/processo/processoById/${id}`);
  }

  updateProcesso(processo: Processo, files: File)  : Observable<any>{
    const formData = new FormData()
    formData.append('files', files)
    return this.http.put<Processo>(`http://localhost:8093/processo/update/${processo.id}?npu=${processo.npu}&uf=${processo.uf}&municipio=${processo.municipio}`, formData);
  }

  deleteProcesso(processo: Processo) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8093/processo/delete/${processo.id}`);
  }


  
}
