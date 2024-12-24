import { Component, Input } from '@angular/core';
import { SingleBookSimpleComponent } from "./single-book-simple/single-book-simple.component";
import { genre, IBook } from '../../../models/type.model';
import { newReleaseBookDb } from '../../../db/newreleasebook.db';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    SingleBookSimpleComponent,
    CommonModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Input() title: string = 'title';

  @Input({required : true}) books: IBook[] | undefined;
}
