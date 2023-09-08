import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { registerDto } from './dto/register.dto';
import { compare, hash } from 'bcryptjs';
import { loginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { jwt_config } from 'src/config/config-jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(data: registerDto) {
    const checkUser = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (checkUser) {
      throw new HttpException('User already registered', HttpStatus.FOUND);
    }

    data.password = await hash(data.password, 12);

    const createUser = await this.prisma.users.create({ data });

    if (createUser) {
      return {
        statusCode: HttpStatus.OK,
        message: 'User Created',
      };
    }
  }

  async login(data: loginDto) {
    const checkUser = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (!checkUser) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const checkPassword = await compare(data.password, checkUser.password);

    if (checkPassword) {
      const accessToken = this.generateJwt({
        sub: checkUser.id,
        name: checkUser.name,
        email: checkUser.email,
      });

      return {
        statusCode: HttpStatus.OK,
        accessToken,
        message: 'Welcome',
      };
    } else {
      throw new HttpException(
        'User or password not match',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  generateJwt(payload: any) {
    return this.jwtService.sign(payload, {
      secret: jwt_config.secret,
      expiresIn: jwt_config.expired,
    });
  }

  async getProfile(user_id: number){
    const checkUser = await this.prisma.users.findUnique({
      select:{
        id: true,
        name: true, 
        email: true, 
        avatar: true,
        task: true
      },
      where: {
        id: user_id
      }
    });
    if(checkUser){
      return {
        statusCode: HttpStatus.OK,
        data: checkUser
      }
    }

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async uploadAvatar(user_id: number, avatar){
    const checkUser = await this.prisma.users.findUnique({
      where: {
        id: user_id
      }
    });
    if(checkUser){
      const updateUser = await this.prisma.users.update({
        data: {
          avatar: avatar
        },
        where: {
          id: user_id
        }
      });
      if(updateUser){
        return {
          statusCode: HttpStatus.OK,
          message: "Avatar uploaded"
        }
      }
    }
    throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
  }
}
