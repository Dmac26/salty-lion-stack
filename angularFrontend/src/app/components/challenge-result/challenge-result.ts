import { Component } from '@angular/core';
import { EmbeddedVidComponent } from '@components/embedded-vid/embedded-vid.component'

@Component({
  selector: 'app-challenge-result',
  imports: [EmbeddedVidComponent],
  templateUrl: './challenge-result.html',
  styleUrl: './challenge-result.scss',
})
export class ChallengeResult {}
