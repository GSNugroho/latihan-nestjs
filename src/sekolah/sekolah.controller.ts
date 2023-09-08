import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SekolahService } from './sekolah.service';
import { CreateSekolahDto } from './dto/create-sekolah.dto';
import { UpdateSekolahDto } from './dto/update-sekolah.dto';

@Controller('sekolah')
export class SekolahController {
  constructor(private readonly sekolahService: SekolahService) {}

  @Post()
  async create(@Body() createSekolahDto: CreateSekolahDto) {
    return await this.sekolahService.create(createSekolahDto);
  }

  @Get()
  async findAll() {
    return await this.sekolahService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sekolahService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSekolahDto: UpdateSekolahDto) {
    return await this.sekolahService.update(+id, updateSekolahDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.sekolahService.remove(+id);
  }
}
