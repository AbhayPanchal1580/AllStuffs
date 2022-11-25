import {
  Body,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersEntity } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupDto } from './dto/signup.dto';
import * as Crypto from 'crypto-js';
import { LoginDto } from './dto/login.dto';
import { ProfileDto } from './dto/profile.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  async signup(@Body() signupDto: SignupDto) {
    const user = this.usersRepository.create();
    user.firstName = signupDto.firstName;
    user.lastName = signupDto.lastName;
    user.email = signupDto.email;
    user.password = String(Crypto.MD5(signupDto.password));

    await user.save();

    return user;
  }

  async login(loginDto: LoginDto) {
    const condition = {
      email: loginDto.email,
      password: String(Crypto.MD5(loginDto.password)),
    };

    const user = await this.usersRepository
      .createQueryBuilder('Users')
      .where('Users.email = :email and Users.password = :password', condition)
      .getOne();

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async getUser(id: number) {
    const user = await this.usersRepository.findOneBy({
      id,
    });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async updateProfile(id: number, profileDto: ProfileDto) {
    const user = await this.getUser(id);

    user.firstName = profileDto.firstName;
    user.lastName = profileDto.lastName;
    user.email = profileDto.email;
    user.password = String(Crypto.MD5(profileDto.password));
    user.state = profileDto.state;
    user.country = profileDto.country;
    user.city = profileDto.city;
    user.postalCode = profileDto.postalCode;
    user.DateOfBirth = profileDto.DateOfBirth;
    user.gender = profileDto.gender;

    await user.save();

    return user;
  }
}
