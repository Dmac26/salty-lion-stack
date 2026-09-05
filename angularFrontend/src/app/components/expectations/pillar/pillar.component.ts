import { Component, Input, OnInit } from "@angular/core";
import { PillarData } from "./pillar-data.type";
import { GifPlayerComponent } from "@components/gif-player/gif-player.component";

@Component({
  selector: 'pillar',
  imports: [GifPlayerComponent],
  standalone: true,
  templateUrl: './pillar.component.html',
  styleUrl: './pillar.component.scss',
})
export class PillarComponent implements OnInit {
  @Input({ required: true }) pillarData!: PillarData;

  get isVideo() {
    if(this.pillarData.mediaSrc.includes('.gif')) {
      debugger;
    }
    return this.pillarData.mediaSrc.includes('.mp4') ? true : false;
  }

  ngOnInit(): void {
    if(this.pillarData.mediaSrc.includes('.gif')) {
      console.log("IsVideo: ", this.isVideo);
    }
  }
}

