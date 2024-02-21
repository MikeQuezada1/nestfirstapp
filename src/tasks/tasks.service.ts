import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {

    private tasks: Task []= [ 
        {
            id:'1',
            title: 'Task 1',
            description: 'this is the first task.',
            status: TaskStatus.PENDING,
        },
    ];
    getAllTasks(){
        return this.tasks;
    }
    createTask(title: string, description: string){
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.DONE,
        };
        this.tasks.push(task);
        return task;
    }
    deleteTasks(id: string){
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
    getTaskById(){}
    updateTasks(){  
    }
}
