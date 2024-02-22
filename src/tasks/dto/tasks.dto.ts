import { TaskStatus } from "../task.entity";
import {IsNotEmpty ,IsOptional,IsString, MinLength, IsIn } from 'class-validator';

export  class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title: string;

    @IsString()
    description?: string;
}

export class UpdateTaskDto{
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.DONE, TaskStatus.IN_PROGRESS])
    status?: TaskStatus;
}