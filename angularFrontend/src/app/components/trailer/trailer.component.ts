import { Component } from '@angular/core';
import { EmbeddedVidComponent } from '@components/embedded-vid/embedded-vid.component'

@Component({
  selector: 'app-trailer',
  imports: [EmbeddedVidComponent],
  templateUrl: './trailer.component.html',
  styleUrl: './trailer.component.scss',
})
export class TrailerComponent {}
