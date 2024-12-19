import { Component } from '@angular/core';
import { SingleBookSimpleComponent } from "./single-book-simple/single-book-simple.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [SingleBookSimpleComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

}
