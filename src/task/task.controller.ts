import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { createTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  @UseGuards(AuthGuard)
  async getAllTask() {
    return await this.taskService.getAllTask();
  }

  @Get('/:task_id')
  @UseGuards(AuthGuard)
  async getTaskId(@Param('task_id') task_id) {
    return await this.taskService.getTaskId(+task_id);
  }

  // @UsePipes(ValidationPipe)
  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  async createTask(@Body() body: createTaskDto) {
    return await this.taskService.createTask(body);
  }

  @Patch('/:task_id')
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  async updateTaskId(@Param('task_id') task_id, @Body() body: updateTaskDto) {
    return await this.taskService.updateTaskId(+task_id, body);
  }

  @Delete('/:task_id')
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  async deleteTaskId(@Param('task_id') task_id) {
    return await this.taskService.deleteTaskId(+task_id);
  }
}
