import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService, @Inject(REQUEST) private req: any) {}

  async getAllTask() {
    const allTask = await this.prisma.task.findMany({
      where: {
        id_user: this.req.user.userId
      },
      include: {
        users: {
          select:{
            id: true,
            name: true
          }
        }
      }
    });

    return {
      statusCode: HttpStatus.OK,
      data: allTask
    }
  }

  async getTaskId(task_id: number) {
    const taskId = await this.prisma.task.findUnique({
      where: {
        id: task_id,
        id_user: this.req.user.userId
      },
    });

    return {
      statusCode: HttpStatus.OK,
      data: taskId
    }
  }

  async createTask(data: createTaskDto) {
    data.id_user = this.req.user.userId;
    const createData = await this.prisma.task.create({
      data: data,
    });
    return {
      statusCode: 200,
      data: createData,
    };
  }

  async updateTaskId(task_id: number, data: updateTaskDto) {
    const updateData = await this.prisma.task.update({
      data: data,
      where: {
        id: task_id,
      },
    });
    return {
      statusCode: 200,
      data: updateData,
    };
  }

  async deleteTaskId(task_id: number) {
    const deleteData = await this.prisma.task.delete({
      where: {
        id: task_id,
      },
    });
    return {
      statusCode: 200,
      data: deleteData,
      message: 'Berhasil dihapus.',
    };
  }
}
