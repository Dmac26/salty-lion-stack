import { Component, Input } from "@angular/core";
import { PillarData } from "./pillar-data.type";

@Component({
  selector: 'pillar',
  standalone: true,
  templateUrl: './pillar.component.html',
  styleUrl: './pillar.component.scss',
})
export class PillarComponent {
  @Input({ required: true }) pillarData!: PillarData;
}

