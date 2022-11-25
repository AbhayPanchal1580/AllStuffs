/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BlogsModule } from './blogs/blogs.module';
import { UsersModule } from './users/users.module';
import { TypeORMConfiguration } from './config/typeorm.configurations';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [BlogsModule, UsersModule, 
TypeOrmModule.forRoot(TypeORMConfiguration),

],
  controllers: [],
  providers: [],
})
export class AppModule {}
