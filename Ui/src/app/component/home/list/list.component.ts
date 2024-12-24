import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { SingleBookSimpleComponent } from "./single-book-simple/single-book-simple.component";
import { IBook } from '../../../models/type.model';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    SingleBookSimpleComponent,
    CommonModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ListComponent{
  
  isEnableListNavigate: boolean = false;
  moreORhide: string = 'more';
  @Input() title: string = 'title';
  @Input({required : true}) books: IBook[] | undefined;

  toggleEnableNavigate(): void {
    this.isEnableListNavigate = !this.isEnableListNavigate
    this.moreORhide = this.isEnableListNavigate? 'hide': 'more'
  }


}
