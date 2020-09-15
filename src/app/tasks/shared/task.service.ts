import { Injectable } from "@angular/core";
import { Task } from "./task.model";



const TASKS: Array<Task> = [
    {id:1, title:'fazer tarefa 1'},
    {id:2, title:'fazer tarefa 2'},
    {id:3, title:'fazer tarefa 3'},
    {id:4, title:'fazer tarefa 4'},
    {id:5, title:'fazer tarefa 5'},
    {id:6, title:'fazer tarefa 6'},
    {id:7, title:'fazer tarefa 7'},
];

@Injectable()

export class TaskService{
 
    //public getTasks(): Array<Task>{
        //return TASKS;
    //}
    public getTasks(): Promise<Task[]>{
        let  promise: any = new Promise((resolve, reject) => {
            if(TASKS.length > 0){
                setTimeout(() => {
                    resolve(TASKS);
                },3000)
                
            }else{
                let error_msg = "NAO HA TAREFAS";
                reject(error_msg);
            }
        })
        return promise;
    }

    public getImportantTasks(): Promise<Task[]>{
        return Promise.resolve(TASKS.slice(0, 3));
    }
   
}