import { Component , Input } from '@angular/core';
import { genre } from '../../../models/type.model';

@Component({
  selector: 'app-single-book-simple',
  standalone: true,
  imports: [],
  templateUrl: './single-book-simple.component.html',
  styleUrl: './single-book-simple.component.scss'
})
export class SingleBookSimpleComponent {


  @Input() book: {
    title: string,
    author: string,
    genre: genre
  } = {
    title: 'Escarboucle Bleue',
    author: 'Arthur',
    genre: genre.Adventure
  }
}
