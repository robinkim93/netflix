import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  createMovie(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  getManyMovies() {
    return `This action returns all movie`;
  }

  getMovie(id: number) {
    return `This action returns a #${id} movie`;
  }

  updateMovie(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  deleteMovie(id: number) {
    return `This action removes a #${id} movie`;
  }
}
