import { environment } from './../environments/environment.prod';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

public env = environment;

  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Sobre', url: '/sobre', icon: 'information-circle' },
    { title: 'Políticas de Privacidade', url: '/privacity', icon: 'document-lock' },
    { title: 'Contatos', url: '/contacts', icon: 'people-circle' }
  ];
  
  constructor() {}
}
