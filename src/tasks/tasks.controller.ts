import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/tasks.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    
    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks();
    }
    @Post()
    createTask(@Body() newTask: CreateTaskDto){
        return this.tasksService.createTask(newTask.title, newTask.description);
    }
    @Delete('/:id')
    deleteTask(@Param('id') id : string){
        this.tasksService.deleteTasks(id);
    }
}