import { Component } from '@angular/core';
import { SingleBookDetailsComponent } from "./single-book-details/single-book-details.component";

@Component({
  selector: 'app-last-reading',
  standalone: true,
  imports: [SingleBookDetailsComponent],
  templateUrl: './last-reading.component.html',
  styleUrl: './last-reading.component.scss'
})
export class LastReadingComponent {

}
