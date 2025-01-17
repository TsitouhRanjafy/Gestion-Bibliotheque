import { lastReadingBooksData } from '../../db/lastreading.db';
import { Component , CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { MenuComponent } from '../../component/home/menu/menu.component';
import { CardProfilComponent } from "../../component/home/card-profil/card-profil.component";
import { HeaderComponent } from "../../component/home/header/header.component";
import { LastReadingComponent } from "../../component/home/last-reading/last-reading.component";
import { ListComponent } from "../../component/home/list/list.component";
import { FamousAuthorComponent } from "../../component/home/famous-author/famous-author.component";
import { IBook, IBookSingle } from '../../models/type.model';
import { get, newReleaseBookDb } from '../../db/newreleasebook.db';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponent,
    CardProfilComponent,
    HeaderComponent,
    LastReadingComponent,
    ListComponent,
    FamousAuthorComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

  lastReadingBooks: IBookSingle[] = lastReadingBooksData
  
  newReleaseBooks: IBook[] = get(0);
  lengthNewRelease: number = newReleaseBookDb.length

  lastBorrowBooks: IBook[] = get(0);
  lengthLastBorrow: number = newReleaseBookDb.length

  AllBooks: IBook[] = get(0)
  lengthAllBooks: number = newReleaseBookDb.length
  

  changePagination(pageIndex: number): void {
    this.newReleaseBooks = get(pageIndex);
  }

  changePaginationLS(pageIndex: number): void {
    this.lastBorrowBooks = get(pageIndex)
  }

  changePaginationAll(pageIndex: number): void {
    this.AllBooks = get(pageIndex)
  }

}
