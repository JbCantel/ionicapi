import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 public myCep!: String;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

  }

  buscar(){
    this.http.get(environment.apiURL + this.myCep + '/json')
    .subscribe(response=> {console.log(response)})
  }
}
