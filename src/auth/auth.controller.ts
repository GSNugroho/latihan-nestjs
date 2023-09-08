import { Body, Controller, Get, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerDto } from './dto/register.dto';
import { loginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiHeader, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  async register(@Body() data: registerDto) {
    return this.authService.register(data);
  }

  @Post('login')
  async login(@Body() data: loginDto) {
    return this.authService.login(data);
  }

  @ApiBearerAuth('accessToken')
  @UseGuards(AuthGuard)
  @ApiHeader({
    name: 'Authorization',
  })
  @Get('profile')
  async profile(@Req() req) {
    return this.authService.getProfile(req.user.userId);
  }

  @ApiBearerAuth('accessToken')
  @UseGuards(AuthGuard)
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        avatar: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('avatar', {
    storage: diskStorage({
      destination: 'public/uploads/images',
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      }
    })
  }))
  @Post('avatar')
  async avatar(@Req() req, @UploadedFile() file: Express.Multer.File) {
    return await this.authService.uploadAvatar(req.user.userId, '/uploads/images/' + file.filename);
  }
}
