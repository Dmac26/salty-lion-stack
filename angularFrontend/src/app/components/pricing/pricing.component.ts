import { Component } from '@angular/core';
import { MembershipComponent } from './membership/membership.component';

@Component({
  selector: 'app-pricing',
  imports: [
    MembershipComponent,
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  readonly memberships = [
    {
      name: "Basic",
      price: "50",
      features: Array(4).fill("Lorem ipsum dolor"),
      cta: "Join Basic"
    },
    {
      name: "Standard",
      price: "XX",
      features: Array(5).fill("Lorem ipsum dolor"),
      isMostPopular: true,
      cta: "Apply now"
    },
    {
      name: "VIP",
      price: "200",
      features: Array(6).fill("Lorem ipsum dolor"),
      cta: "Apply now"
    },
  ];
}
