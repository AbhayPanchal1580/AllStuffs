import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { UsersService } from './users.service';
import { ProfileDto } from './dto/profile.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return this.usersService.signup(signupDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.usersService.login(loginDto);
  }

  @Patch('profile/:id')
  updateProfile(@Param('id') id: number, @Body() profileDto: ProfileDto) {
    return this.usersService.updateProfile(id, profileDto);
  }
}
