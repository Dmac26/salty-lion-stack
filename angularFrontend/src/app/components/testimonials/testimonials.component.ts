import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  entries = [
    { name: "Aaron", about: "Mexican American heritage learner building connections with his students", quote: `Literally life changing! I finally ordered in Spanish at a restaurant and it went great. The program is really tailored to me — it's a ton of support and was exactly what I was looking for, and way more.` },
    { name: "Alicia", about: "non-profit professional learning Spanish to better serve her organization's clients", quote: `We chose Bridge the Gap Spanish for our team's professional development and they've been fantastic to work with. Their focus on conversational Spanish — rather than just boring grammar drills — has been perfect for our staff. It's practical, flexible, and highly professional.` },
    { name: "Morgan", about: "learning to connect with her Guatemalan husband's family", quote: `I've grown so much over the year and have been able to engage with my in-laws so much more. BTG works great by providing accountability and an individualized approach that helped ease my nerves about speaking.` },
    { name: "Jackie", about: "advanced professional Spanish user", quote: `After 4 months I'm speaking more frequently and with more confidence. It's a good value for the money. Both of my teachers are highly qualified, love their language, and don't mind my endless questions — they seem to enjoy them.` },
    { name: "Courtney", about: "Puerto Rican heritage speaker learning Spanish to connect with her roots and use it professionally", quote: `I'm finally feeling confident enough to just open my mouth and talk! I always in the past got nervous and shut myself down — and they're helping me get past that so quickly.` },
    { name: "Whitney", about: "6+ months in the program", quote: `From assessing my level at the start to matching me with a native speaker, I've appreciated the attentive service and care. My Spanish speaking skills have improved a lot, and I've gained so much confidence` },
    { name: "Rick", about: "preparing to move to Spain and immerse himself in the language and culture", quote: `BTG is like family and they care about my success. My instructors encourage me and find unique ways to immerse me in the language and culture. Familia es todo, y BTG es mi familia.` },
    { name: "Ashleigh", about: "Mexican American heritage speaker building on her school Spanish", quote: `I feel much more confident in speaking and understanding Spanish! I've learned far more than I could on my own. Keshia and Irma are fantastic! I'm able to ask questions and have extra review on more difficult pieces of the language.` },
    { name: "Wynne", about: "proving it's never too late to start", quote: `I am having so much fun learning Spanish with Keshia and Irma. They are always prepared and tailor the lessons for me. They encourage me to ask lots of questions and are very positive about my small steps. Learning a new language is not easy for me but with their instruction, I think I can do it!` },
    { name: "Makyba", about: "esthetician building Spanish skills to better serve her clients", quote: `I was a bit nervous about really challenging myself to begin to speak Spanish, but this program has built my skills and confidence with speaking and using more Spanish.` },
    { name: "Ashley", about: "Cuban American reconnecting with her heritage through cultural match", quote: `Keshia went above and beyond to match me up with a Cuban woman, knowing that I was Cuban myself. The experience was so personal and my teacher was friendly, very helpful, and professional. It has been a great step for me in my Spanish journey.` },
    { name: "Lauren", about: "therapist learning Spanish to better serve her non-profit's clients", quote: `Keshia does such a good job intentionally matching her students and teachers. I've learned so much since starting the program and I'm so grateful for their patience and intentionality. They will work with you and meet you exactly where you are at!` },
    { name: "Evaline", about: "heritage speaker reconnecting with her family's language", quote: `It's been a few months since starting my language journey more seriously, and I have immensely enjoyed being able to have the guidance to hone in on my grammar knowledge and practice speaking with a native Spanish speaker each week!` },
    { name: "Makayla", about: "learning Spanish out of love for the language and culture", quote: `I was fortunate enough to come across this company! Keshia starts with a test to see where you are and finds a tutor that is compatible with you. It is everything I was looking for — now I get to learn Spanish custom to my learning pace and needs!` },
    { name: "Jenni", about: "preparing to spend more time at her home in Cabo", quote: `Bridge the Gap is an outstanding language program. It is tailored to your needs and wants. Easy, effective, and well worth the effort!` },
  ];

  constructor() { }
}
