import { Author } from './author.model';

export interface Course {
  id: string;
  name: string;
  description: string;
  date: Date;
  length: number;
  isTopRated: boolean;
  authors?: Author[];
}
