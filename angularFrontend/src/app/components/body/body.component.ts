import { Component } from '@angular/core';
import { SectionBaseComponent } from '@components/section-base/section-base.component';

@Component({
  selector: 'app-body',
  imports: [SectionBaseComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
