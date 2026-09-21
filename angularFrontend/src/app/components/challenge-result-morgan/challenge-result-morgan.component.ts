import { Component, Input } from '@angular/core';
import { ChallengeResult } from '@components/challenge-result/challenge-result';

@Component({
  selector: 'app-challenge-result-morgan',
  imports: [ChallengeResult],
  templateUrl: './challenge-result-morgan.component.html'
})
export class ChallengeResultMorganComponent {
  @Input() backgroundColor: string = '';

  challengeResultBackgroundColor(): string {
    return this.backgroundColor || '';
  }
}
