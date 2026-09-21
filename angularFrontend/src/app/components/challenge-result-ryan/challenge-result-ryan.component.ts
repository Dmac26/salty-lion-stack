import { Component, Input, OnInit} from '@angular/core';
import { ChallengeResult } from '@components/challenge-result/challenge-result';

@Component({
  selector: 'app-challenge-result-ryan',
  imports: [ChallengeResult],
  templateUrl: './challenge-result-ryan.component.html',
})
export class ChallengeResultRyanComponent {
  @Input() backgroundColor: string = '';


  challengeResultBackgroundColor(): string {
    return this.backgroundColor || '';
  }
}
