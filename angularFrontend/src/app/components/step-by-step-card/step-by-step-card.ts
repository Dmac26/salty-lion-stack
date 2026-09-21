import { Component } from '@angular/core';
import { WygCard } from '@components/wyg-card/wyg-card';
import { GifPlayerComponent } from "@components/gif-player/gif-player.component";

@Component({
  selector: 'app-step-by-step-card',
  imports: [WygCard, GifPlayerComponent],
  templateUrl: './step-by-step-card.html',
  styleUrl: './step-by-step-card.scss',
})
export class StepByStepCard {}
