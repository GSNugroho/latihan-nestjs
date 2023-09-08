import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateSekolahDto {

    @IsString()
    @IsNotEmpty()
    school_name: string

    @IsOptional()
    @IsString()
    @IsEmail()
    email?: string

    @IsOptional()
    @IsString()
    address?: string

    @IsOptional()
    @IsString()
    phone?: string

}
