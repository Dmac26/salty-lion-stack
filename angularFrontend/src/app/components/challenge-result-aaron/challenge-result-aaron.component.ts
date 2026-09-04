import { Component, Input } from '@angular/core';
import { ChallengeResult } from '@components/challenge-result/challenge-result';

@Component({
  selector: 'app-challenge-result-aaron',
  imports: [ChallengeResult],
  templateUrl: './challenge-result-aaron.component.html',
})
export class ChallengeResultAaronComponent {
  @Input() backgroundColor: string = '';

  challengeResultBackgroundColor(): string {
    return this.backgroundColor || '';
  }
}
