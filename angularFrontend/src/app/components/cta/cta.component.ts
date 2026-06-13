import { Component, Input, HostBinding } from '@angular/core';
import { CtaButtonComponent } from '@components/cta-button/cta-button.component'

@Component({
  selector: 'app-cta',
  imports: [CtaButtonComponent],
  standalone: true,
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
})
export class CtaComponent {
  @Input() backgroundColor!: string;
  @Input() buttonText!: string;

  @HostBinding('style.--cta-bg')
  get ctaBackground() {
    return this.backgroundColor || '#ffffff';
  }
  constructor(){}
}
