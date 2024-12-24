import { Component , CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core';
import { SingleBookDetailsComponent } from "./single-book-details/single-book-details.component";
import { genre, IBookSingle } from '../../../models/type.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-last-reading',
  standalone: true,
  imports: [
    SingleBookDetailsComponent, 
    CommonModule
  ],
  templateUrl: './last-reading.component.html',
  styleUrl: './last-reading.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LastReadingComponent {
  
  @Input() lastReadingBooks: IBookSingle[] = [
    {
      title: 'Title Harry potter book',
      genre: genre.Fantastic,
      dateRetour: new Date 
    }
  ]

}
