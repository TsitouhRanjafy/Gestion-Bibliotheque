import { Component, Input } from '@angular/core';
import { SingleBookSimpleComponent } from "./single-book-simple/single-book-simple.component";
import { genre } from '../../../models/type.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [SingleBookSimpleComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Input() title: string = 'title';

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
