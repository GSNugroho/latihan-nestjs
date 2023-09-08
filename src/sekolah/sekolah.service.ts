import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSekolahDto } from './dto/create-sekolah.dto';
import { UpdateSekolahDto } from './dto/update-sekolah.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SekolahService {

  constructor(private prisma: PrismaService) { }
  async create(createSekolahDto: CreateSekolahDto) {
    const createSekolah = await this.prisma.sekolah.create({
      data: createSekolahDto
    });
    if (createSekolah) {
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Sekolah created',
        data: createSekolah
      }
    }

    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
  }

  async findAll() {
    const sekolah = await this.prisma.sekolah.findMany();
    if (sekolah) {
      return {
        statusCode: HttpStatus.OK,
        message: 'Sekolah found',
        data: sekolah
      }
    }

    throw new HttpException('Sekolah not found', HttpStatus.NOT_FOUND);
  }

  async findOne(id: number) {
    const sekolah = await this.prisma.sekolah.findUnique({
      where: {
        id: id
      }
    });
    if (sekolah) {
      return {
        statusCode: HttpStatus.OK,
        message: 'Sekolah found',
        data: sekolah
      }
    }

    throw new HttpException('Sekolah not found', HttpStatus.NOT_FOUND);
  }

  async update(id: number, updateSekolahDto: UpdateSekolahDto) {
    const updateSekolah = await this.prisma.sekolah.update({
      where: {
        id: id
      },
      data: updateSekolahDto
    });
    if (updateSekolah) {
      return {
        statusCode: HttpStatus.OK,
        message: 'Sekolah updated',
        data: updateSekolah
      }
    }

    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
  }

  async remove(id: number) {
    const deleteSekolah = await this.prisma.sekolah.delete({
      where: {
        id: id
      }
    });
    if (deleteSekolah) {
      return {
        statusCode: HttpStatus.OK,
        message: 'Sekolah deleted',
        data: deleteSekolah
      }
    }

    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
  }
}
