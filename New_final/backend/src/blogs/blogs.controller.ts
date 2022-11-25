/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create.blog.dto';
import { UpdateBlogDto } from './dto/update.blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Post()
  createBlog(@Body() createBlogDto: CreateBlogDto) {
    return this.blogsService.createBlog(createBlogDto);
  }

  @Get()
  getBlogs() {
    return this.blogsService.getBlogs();
  }

  @Get(':id')
  getBlogDetails(@Param('id') id: number) {
    return this.blogsService.getBlogDetails(id);
  }

  @Patch(':id')
  updateBlog(@Param('id') id: number, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.updateBlog(id, updateBlogDto);
  }

  @Delete(':id')
  deleteBlog(@Param('id') id: number) {
    return this.blogsService.deleteBlog(id);
  }
}
