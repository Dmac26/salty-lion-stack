import { Component } from '@angular/core';
import { SectionBaseComponent } from '@components/section-base/section-base.component';
import { HeroComponent } from '@components/hero/hero.component';
import { TrailerComponent } from '@components/trailer/trailer.component';
import { SolutionComponent } from '@components/solution/solution.component';
import { TestimonialsComponent } from '@components/testimonials/testimonials.component';
import { TimelineComponent } from '@components/timeline/timeline.component';
import { ProgramsComponent } from '@components/programs/programs.component';
import { SocialProofComponent } from '@components/social-proof/social-proof.component';
import { AboutComponent } from '@components/about/about.component';
import { GuaranteeComponent } from '@components/guarantee/guarantee.component';
import { FaqComponent } from '@components/faq/faq.component';
import { CtaComponent } from '@components/cta/cta.component';
import { StatsComponent } from '@components/stats/stats.componet';
import { NarrativeComponent } from '@components/narrative/narrative.component';

@Component({
  selector: 'app-body',
  imports: [
              SectionBaseComponent, 
              HeroComponent, 
              TrailerComponent,
              SolutionComponent,
              TestimonialsComponent,
              TimelineComponent,
              ProgramsComponent,
              SocialProofComponent,
              AboutComponent,
              GuaranteeComponent,
              FaqComponent,
              CtaComponent,
              StatsComponent,
              NarrativeComponent
            ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
