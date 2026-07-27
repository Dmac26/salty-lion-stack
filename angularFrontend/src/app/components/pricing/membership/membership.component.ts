import { Component, input } from '@angular/core';

@Component({
  selector: 'app-membership',
  imports: [],
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.scss',
})
export class MembershipComponent {
  name = input<string>();
  price = input<string>();
  isMostPopular = input<boolean>();
  features = input<string[]>();
  cta = input<string>();
}
