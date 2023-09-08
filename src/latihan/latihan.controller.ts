import { Controller, Get } from '@nestjs/common';
import { LatihanService } from './latihan.service';

@Controller('latihan')
export class LatihanController {
  constructor(private readonly LatihanService: LatihanService) {}

  @Get()
  getLatihan() {
    return this.LatihanService.getLatihan();
  }

  @Get('v1')
  getLatihan2(): string {
    return 'Latihan2';
  }
}
