import { Component, Input, HostBinding, OnInit} from '@angular/core';
import { EmbeddedVidComponent } from '@components/embedded-vid/embedded-vid.component'

@Component({
  selector: 'app-challenge-result',
  imports: [EmbeddedVidComponent],
  templateUrl: './challenge-result.html',
  styleUrl: './challenge-result.scss',
})
export class ChallengeResult implements OnInit {
  @Input() mediaSource: string = '';
  @Input() iconSrc: string = 'images/cactus.png';
  @Input() challengeTitle: string = 'THE CHALLENGE';
  @Input() challengeContent: string = '';
  @Input() resultTitle: string = 'THE RESULT';
  @Input() resultContent: string = '';
  @Input() testimonial: string = '';
  @Input() customerName: string = '';
  @Input() backgroundColor: string = '';


  @HostBinding('style.--challenge-result-bg')

  get ctaBackground() {
    return this.backgroundColor || '#hoopadoopa';
  }

  get isVideo() {
    if(this.mediaSource.includes('.png') || this.mediaSource.includes('.jpg')) {
      return false
    }

    return true;
  }

  ngOnInit() {
    console.log(`Background Color in the main component:  ${this.backgroundColor}`);
  }
}