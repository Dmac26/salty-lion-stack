import { Component } from '@angular/core';
import { SectionBaseComponent } from '@components/section-base/section-base.component';
import { HeroComponent } from '@components/hero/hero.component';
import { ProblemComponent } from '@components/problem/problem.component';
import { SolutionComponent } from '@components/solution/solution.component';
import { TestimonialsComponent } from '@components/testimonials/testimonials.component';
import { TimelineComponent } from '@components/timeline/timeline.component';
import { ProgramsComponent } from '@components/programs/programs.component';
import { SocialProofComponent } from '@components/social-proof/social-proof.component';
import { AboutComponent } from '@components/about/about.component';
import { GuaranteeComponent } from '@components/guarantee/guarantee.component';
import { FaqComponent } from '@components/faq/faq.component';
import { CtaComponent } from '@components/cta/cta.component';

@Component({
  selector: 'app-body',
  imports: [
              SectionBaseComponent, 
              HeroComponent, 
              ProblemComponent,
              SolutionComponent,
              TestimonialsComponent,
              TimelineComponent,
              ProgramsComponent,
              SocialProofComponent,
              AboutComponent,
              GuaranteeComponent,
              FaqComponent,
              CtaComponent
            ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {}
