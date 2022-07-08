import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timeStamp } from 'console';
import { DataSource, Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    private dataSource: DataSource
  ) {

  }



  async create(createPostInput: CreatePostInput) {

    try {
      return await this.postRepository.save(createPostInput)
    } catch (error) {
      throw new HttpException("Błąd dodawania posta", HttpStatus.BAD_REQUEST)
    }

  }

  async findAll() {
    try {
      return await this.postRepository.find()
    } catch (error) {
      throw new HttpException("Błąd dodawania posta", HttpStatus.BAD_REQUEST)
    }
  }

  async findOne(id: number) {
    try {
      return await this.postRepository.findBy({ id: id })
    } catch (error) {
      throw new HttpException("Błąd dodawania posta", HttpStatus.BAD_REQUEST)
    }
  }

  async update(id: number, updatePostInput: UpdatePostInput) {
    try {
      // const updated = await this.postRepository.update(id, updatePostInput)

      const updated = await this.dataSource.getRepository(Post)
      .createQueryBuilder()
      .update(updatePostInput)
      .where("id = :id", {id: id})
      .returning('*')
      .execute()


      console.log(updated);
      return updated.raw[0];
      

    } catch (error) {
      throw new HttpException("Błąd dodawania posta", HttpStatus.BAD_REQUEST)
    }
  }

  async remove(id: number) {
    try {
      const deleted = await this.postRepository.delete(id)

      console.log(deleted);

      if(!deleted.affected) {
        throw new Error("Post nie istnieje")
      }

      return id;
      

    } catch (error) {
      throw new HttpException("Błąd dodawania posta", HttpStatus.BAD_REQUEST)
    }
  }
}
