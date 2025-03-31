import { Component, OnInit } from '@angular/core';
import { Processo } from '../processos';
import { ProcessosService } from 'src/app/processos.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-processos-visualiza',
  templateUrl: './processos-visualiza.component.html',
  styleUrls: ['./processos-visualiza.component.css']
})
export class ProcessosVisualizaComponent implements OnInit {

  constructor(private service: ProcessosService,  private activeRoute: ActivatedRoute, private router: Router) { }
  id: number;
  processo: Processo;
  ngOnInit() {

    const id = this.activeRoute.snapshot.paramMap.get('id');
      if(id) {
        this.service.getProcessoById(+id).subscribe((data => {
          this.processo = data;
        }))
        
     
      }

  }
  voltar() {
    this.router.navigate(['/processos/lista'])
  }

}
