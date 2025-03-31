import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuarioLogado: String;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  logout() {
    this.router.navigate(['/login'])
  }

}
