import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {


  @Input() iconPath: string = ''
  @Input() title: string = ''
  @Input() background: 'bg-whitepropre' | 'bg-bluehover' | 'bg-blue' = 'bg-blue'
  @Input() backgroundactive: string = 'active:bg-blueactive'
  @Input() textcolor: 'text-primary' | 'text-whitepropre' = 'text-whitepropre'
}
