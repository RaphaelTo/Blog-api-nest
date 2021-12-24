import { BadRequestException, Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public async addUser(@Body() body: CreateUserDto) {
    try {
      const createUser = await this.userService.create(body);
      return createUser;
    } catch {
      throw new BadRequestException();
    }
  }
}
