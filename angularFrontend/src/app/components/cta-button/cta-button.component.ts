import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  imports: [],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss',
})
export class CtaButtonComponent {
  @Input() buttonColor!: string;
  @Input() buttonText!: string;
  @Input() buttonHeight!: string;

  @HostBinding('style.--cta-button-bg')

  get ctaButtonColor() {
    return this.buttonColor || '#0061ff';
  }

  @HostBinding('style.--cta-button-height')

  get ctaButtonHeight() {
    return this.buttonHeight || '5rem';
  }
}