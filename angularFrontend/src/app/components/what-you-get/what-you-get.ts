import { Component } from '@angular/core';
import { WygCard } from '@components/wyg-card/wyg-card';
import { CommunityAccessCard } from '@components/community-access-card/community-access-card';
import { ConversationClassCard } from '@components/conversation-class-card/conversation-class-card';
import { QuarterlyProgressCard } from '@components/quarterly-progress-card/quarterly-progress-card';
import { StepByStepCard } from '@components/step-by-step-card/step-by-step-card'


@Component({
  selector: 'app-what-you-get',
  imports: [
              WygCard,
              CommunityAccessCard,
              ConversationClassCard,
              QuarterlyProgressCard,
              StepByStepCard
            ],
  templateUrl: './what-you-get.html',
  styleUrl: './what-you-get.scss',
})
export class WhatYouGet {}
