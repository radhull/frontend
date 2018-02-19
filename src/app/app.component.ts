import { Component, OnInit } from '@angular/core';
import { MiHttpService } from './mi-http.service';
interface ParamsLogin {
  UserName: string;
  Password: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  mensaje = 'emsaje';
  params: ParamsLogin = {UserName: 'hola', Password: 'password'};


  constructor(public miHttpService: MiHttpService) { }

  ngOnInit() {
  }

loginPost() {

this.miHttpService.postLogin(this.params).subscribe(
  result => {
    this.mensaje = result;
  },
  error => {
    console.log(<any>error);
  }
);
}


loginGet() {

  this.miHttpService.getLogin().subscribe(
    result => {
      this.mensaje = result;
    },
    error => {
      console.log(<any>error);
    }
  );
  }

}
