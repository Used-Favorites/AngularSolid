import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  nome: string = ''; 
  email: string = ''; 
  senha: string = ''; 
  confirmacaoSenha: string = ''; 
  termosAceitos: boolean = false; 
  cadastrar(): void {
    if (this.nome && this.email && this.senha && this.senha === this.confirmacaoSenha && this.termosAceitos) {
      console.log('Dados enviados:', this.nome, this.email, this.senha);
    } else {
      console.log('Por favor, preencha todos os campos corretamente.');
    }
  }

}
