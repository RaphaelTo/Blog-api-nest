import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  BadRequestException,
  Controller,
  Param,
  Post,
  Body,
  Get,
  NotFoundException,
  Put,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { User } from './User.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { DeleteResult } from 'typeorm';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiResponse({ status: 200, description: 'return all user' })
  @ApiResponse({ status: 404, description: 'throw error when 0 user found' })
  @UseGuards(JwtAuthGuard)
  @Get('/all')
  public async allUser(@Request() req): Promise<User[]> {
    try {
      const users = await this.userService.findAll();
      if (!users.length) {
        throw new NotFoundException('no user exist');
      }

      return users;
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @ApiResponse({ status: 200, description: 'return the user found by id' })
  @ApiResponse({
    status: 404,
    description: 'throw error when user is not found',
  })
  @Get('/byId/:id')
  public async findUserById(@Param('id') idUser: string): Promise<User> {
    try {
      const user = await this.userService.findById(idUser);

      if (!user) {
        throw new NotFoundException('user doesnt exist');
      }

      return user;
    } catch (e) {
      throw new NotFoundException(e);
    }
  }

  @ApiResponse({ status: 201, description: 'return user added' })
  @ApiResponse({ status: 400, description: 'throw error 400' })
  @ApiBody({
    description: 'Il devra comprendre les champs du DTO',
    type: CreateUserDto,
  })
  @Post()
  public async addUser(@Body() body: CreateUserDto) {
    try {
      const user = await this.userService.create(body);

      return user;
    } catch {
      throw new BadRequestException();
    }
  }

  @ApiResponse({
    status: 200,
    description: 'update user and return user with new value',
  })
  @ApiResponse({ status: 400, description: 'throw error 400' })
  @ApiBody({
    description: 'Should have same attribut of DTO update user',
    type: UpdateUserDto,
  })
  @ApiParam({ name: 'id', type: 'string' })
  @Put('byId/:id')
  public async updateUser(
    @Body() userParam: UpdateUserDto,
    @Param('id') idUser: string,
  ) {
    try {
      const user = await this.userService.update(userParam, idUser);
      return user;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @ApiResponse({
    status: 200,
    description: 'delete an user by id',
  })
  @ApiResponse({
    status: 404,
    description: 'throw error 404 when user not found',
  })
  @ApiResponse({
    status: 400,
    description: 'throw error 404 when error database',
  })
  @ApiParam({ name: 'id', type: 'string', description: 'is id of user' })
  @Delete('byId/:id')
  public async deleteUser(@Param('id') idUser: string): Promise<DeleteResult> {
    try {
      const user = await this.userService.delete(idUser);

      if (user.raw === 0) {
        throw new NotFoundException('user doesnt exist');
      }

      return user;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
