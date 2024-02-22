import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/tasks.dto';

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
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    getTaskById(id: string): Task{
        return this.tasks.find(task => task.id === id);
    }
    updateTasks(id: string, updateFields: UpdateTaskDto): Task{
        const task = this.getTaskById(id);
        const newtask =Object.assign(task, updateFields);
        this.tasks = this.tasks.map((task) => (task.id === id ? newtask : task));
        return newtask;
    }
}
