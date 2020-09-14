import { Component, OnInit } from '@angular/core';

import { Task } from "./shared/task.model";
import { TaskService } from './shared/task.service';


@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    providers:[ TaskService
        //{provide: TaskService, useClass: TaskService}
    ]
})

export class TasksComponent implements OnInit{
   public tasks:Array<Task>;
   public selectedTask: Task;
  // private taskService: TaskService;

   public constructor(private taskService: TaskService){
       //this.taskService = taskService;
    }
    
    public ngOnInit(){
        //debugger
        //this.tasks = this.taskService.getTasks();
        this.taskService.getTasks()
            .then((tasks) => {
                console.log("Requisição efetuada com sucesso");
                console.log(tasks);
                this.tasks = tasks;
            })
            .catch((error_msg) => console.log(error_msg));
            
        //this.tasks = TASKS;
        //this.selectedTask = new Task( 0 , 'init' );
    }

    public onSelect( task: Task ): void{
        //debugger
        this.selectedTask = task;
    }

}