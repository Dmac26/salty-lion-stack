import { Component } from '@angular/core';
import { WygCard } from '@components/wyg-card/wyg-card';
import { GifPlayerComponent } from "@components/gif-player/gif-player.component";

@Component({
  selector: 'app-community-access-card',
  imports: [WygCard, GifPlayerComponent],
  templateUrl: './community-access-card.html',
  styleUrl: './community-access-card.scss',
})
export class CommunityAccessCard {}
