import { Component } from '@angular/core';
import { PillarComponent } from './pillar/pillar.component';
import { PillarData } from './pillar/pillar-data.type';

const PILLARS: PillarData[] = [
  {
    icon: '📈',
    title: 'Rapid Learning',
    body: 'You aren&apos;t constantly looking for ways to practice. The speaking challenges, vocabulary sprints, and grammar courses in the BTG community provide the opportunities to accelerate your Spanish progress.',
    imageSrc: 'images/keshia-working.png'
  },
  {
    icon: '🗣️',
    title: 'Real Conversation Practice',
    body: 'You don&apos;t learn to speak by studying. You learn by speaking &mdash; with patience, with encouragement, and without judgment. Our native teachers meet you exactly where you are.',
    imageSrc: 'images/keshia-working.png'
  },
  {
    icon: '🧭',
    title: 'A Clear Path Forward',
    body: 'Knowing how much you’ve progressed over time can be challenging when you don’t have a standard to measure your progress against. That&apos;s why we built the 12-Milestone Framework. You will always know where you are in your journey and what&apos;s next.',
    imageSrc: 'images/keshia-working.png'
  },
  {
    icon: '👥',
    title: 'A Community That Gets It',
    body: 'You will go a lot further and faster when you learn with others. The BTG community is full of adults at every level who are showing up, making mistakes, and cheering each other on.',
    imageSrc: 'images/keshia-working.png'
  }
];

@Component({
  selector: 'app-expectations',
  imports: [PillarComponent],
  templateUrl: './expectations.component.html',
  styleUrl: './expectations.component.scss',
})
export class ExpectationsComponent {
  public readonly pillars = PILLARS;
}
