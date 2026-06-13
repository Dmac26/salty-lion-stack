import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  imports: [],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss',
})
export class CtaButtonComponent {
  @Input() backgroundColor!: string;
  @Input() buttonText!: string;

  constructor(){}


}
