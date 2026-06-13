import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-embedded-vid',
  standalone: true,
  imports: [],
  templateUrl: './embedded-vid.component.html',
  styleUrl: './embedded-vid.component.scss',
})
export class EmbeddedVidComponent {
  @Input() videoId!: string;
  //videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  get embedUrl(): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${this.videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
