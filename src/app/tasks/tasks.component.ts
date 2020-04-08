import { Component, OnInit } from '@angular/core';

import { Task } from "./shared/task.model";

const TASKS: Array<Task> = [
    {id:1, title:'fazer tarefa 1'},
    {id:2, title:'fazer tarefa 2'},
    {id:3, title:'fazer tarefa 3'},
    {id:4, title:'fazer tarefa 4'},
    {id:5, title:'fazer tarefa 5'},
    {id:6, title:'fazer tarefa 6'},
    {id:7, title:'fazer tarefa 7'},
];

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html'


})

export class TasksComponent implements OnInit{
   public tasks:Array<any>;
   public selectedTask: Task;

   public constructor(){
    }
    
    public ngOnInit(){
        //debugger
        this.tasks = TASKS;
        //this.selectedTask = new Task( 0 , 'init' );
    }

    public onSelect( task: Task ): void{
        //debugger
        this.selectedTask = task;
    }

}