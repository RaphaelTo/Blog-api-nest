import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './User.entity';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  public async create(user: CreateUserDto): Promise<CreateUserDto> {
    try {
      const createUser = this.userRepository.create(user);
      await this.userRepository.save(createUser);
      return user;
    } catch (err) {
      throw err;
    }
  }
}
