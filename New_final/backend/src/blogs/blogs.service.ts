import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogEntity } from './blogs.entity';
import { CreateBlogDto } from './dto/create.blog.dto';
import { UpdateBlogDto } from './dto/update.blog.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogEntity)
    private blogRepository: Repository<BlogEntity>,
  ) {}

  async createBlog(createBlogDto: CreateBlogDto) {
    const blog = this.blogRepository.create();
    blog.title = createBlogDto.title;
    blog.contents = createBlogDto.contents;
    blog.tags = createBlogDto.tags;

    await blog.save();

    return blog;
  }

  async getBlogs() {
    return await this.blogRepository.find();
  }

  async getBlog(id: number) {
    const blog = await this.blogRepository.findOneBy({
      id,
    });

    if (!blog) {
      throw new NotFoundException();
    }

    return blog;
  }

  getBlogDetails(id: number) {
    return this.getBlog(id);
  }

  async updateBlog(id: number, updateBlogDto: UpdateBlogDto) {
    const blog = await this.getBlog(id);

    blog.title = updateBlogDto.title;
    blog.contents = updateBlogDto.contents;
    blog.tags = updateBlogDto.tags;

    await blog.save();

    return blog;
  }

  async deleteBlog(id: number) {
    const blog = await this.getBlog(id);

    await this.blogRepository.remove(blog);

    return this.getBlogs();
  }
}


