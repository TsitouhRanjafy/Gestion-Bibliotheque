import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-already',
  standalone: true,
  imports: [],
  templateUrl: './already.component.html',
  styleUrl: './already.component.scss'
})
export class AlreadyComponent {

  @Input({required:true}) question: string = '';
  @Input({required: true}) solution: string = ''
}
