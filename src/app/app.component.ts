import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from './shared/service/login.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule , CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LiberiaQuijote';
  constructor(private loginService: LoginService){}
  usuario = '';
  contrasena = '';
  pass = true;

  login(){
    token: this.loginService.login(this.usuario, this.contrasena).subscribe(
      (response: string)=>{
        alert('Login exitoso')
        this.pass = false
      },
      (error: string)=>{
        alert('Error al iniciar sesion')
      }
    );
  }
}
