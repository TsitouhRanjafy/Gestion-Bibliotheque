import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-already',
  standalone: true,
  imports: [],
  templateUrl: './already.component.html',
  styleUrl: './already.component.scss'
})
export class AlreadyComponent {

  @Input() question: string = 'Already have account'
  @Input() solution: string = 'Log in'
}
