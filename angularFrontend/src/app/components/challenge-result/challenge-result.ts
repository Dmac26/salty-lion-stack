import { Component, Input } from '@angular/core';
import { EmbeddedVidComponent } from '@components/embedded-vid/embedded-vid.component'

@Component({
  selector: 'app-challenge-result',
  imports: [EmbeddedVidComponent],
  templateUrl: './challenge-result.html',
  styleUrl: './challenge-result.scss',
})
export class ChallengeResult {
  @Input() videoId: string = '';
  @Input() iconSrc: string = 'images/cactus.png';
  @Input() challengeTitle: string = 'THE CHALLENGE';
  @Input() challengeContent: string = '';
  @Input() resultTitle: string = 'THE RESULT';
  @Input() resultContent: string = '';
  @Input() testimonial: string = '';
  @Input() customerName: string = '';
  @Input() backgroundColor: string = '#ecf4ff';
}