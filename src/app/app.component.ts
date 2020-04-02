import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Titulo trocado!'; 
  task: Task = new Task(21, 'Enviar orcamento para o cliente x');

  task2: Task = {
    id: 22,
    title:'Enviar orcamento para o cliente x2'
  };
}

export class Task{
  id: number;
  public title: string;
  
    constructor(id: number, title: string){
      this.id = id;
      this.title = title;
    }
  }
