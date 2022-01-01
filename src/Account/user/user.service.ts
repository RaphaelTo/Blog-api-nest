import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { User } from './User.entity';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  public async findAll(): Promise<User[]> {
    try {
      const find = await this.userRepository.find();
      return find;
    } catch (err) {
      throw err;
    }
  }

  public async findById(idUser: string): Promise<User> {
    try {
      const byId = await this.userRepository.findOne({ idUser });
      return byId;
    } catch (err) {
      throw err;
    }
  }

  public async create(user: CreateUserDto): Promise<User> {
    try {
      const createUser = this.userRepository.create(user);
      const saveUser = await this.userRepository.save(createUser);

      return saveUser;
    } catch (err) {
      throw err;
    }
  }

  public async update(
    user: UpdateUserDto,
    idUser: string,
  ): Promise<UpdateUserDto> {
    try {
      await this.userRepository.update({ idUser }, user);
      return user;
    } catch (e) {
      throw e;
    }
  }

  public async delete(idUser: string): Promise<DeleteResult> {
    try {
      const deleted = await this.userRepository.delete({ idUser });
      return deleted;
    } catch (e) {
      throw e;
    }
  }
}
