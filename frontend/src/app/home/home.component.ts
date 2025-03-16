import { Component } from '@angular/core';
import { PortfolioContentComponent } from '../portfolio-content/portfolio-content.component';

@Component({
  selector: 'app-home',
  imports: [PortfolioContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public contentBlocks: string[] = [
  `
  <h2>About Me</h2>
  <p>I was born in Crimea, the southern peninsula of Ukraine. I am Crimean Tatar. We are the indigenous people of Crimea, a Muslim, Turkic-speaking people, the largest ethnic minority of Ukraine. Though my nation has been continually persecuted by Russia and slowly forced out of the peninsula, we remain a proud and independent people, clinging fast to our traditions and values. And one of those values is the importance of education. I grew up in a family in which education was always a priority. My brother and I attended the best public school available to us, and we were urged to continue on with our education.</p>
  <p>As a child growing up as a minority, surrounded by people who sometimes despised us, I always found comfort in school and admired my teachers—especially those who helped me better understand my language and culture. I often thought to myself, “I will be a teacher when I grow up.” But as the time neared for making those decisions, life radically changed in Crimea. When Russia invaded my homeland, I chose to leave and pursue my dream of studying abroad. I moved to Turkey, where I could study in a field that promised a higher-paying job and provided much-needed support for my family back in Crimea. From a young age, I had always wanted to study abroad, to learn new languages, and to find success in an international environment. These experiences continue to inspire my path as an educator.
</p>
  <p>I graduated from the university in Turkey and came to the United States as a refugee from the war in Ukraine and intended to continue my studies in architecture. But then my life took another radical turn when I was offered the opportunity to teach first grade in a school that serves disadvantaged and bilingual  students. I found myself facing a classroom of 24 six-year-olds, mostly Somali students, and I fell in love with teaching and all those aspirations to emulate the teachers of my youth came back to me. I knew that what I truly wanted to be was a teacher.
</p>
  <p>As an immigrant and being far away from my homeland, working with kids especially brings me joy in my life. I want to teach children non-violent ways to solve problems and inspire them to experience the world beyond their borders. For me, education isn’t just about academics, but about becoming ethical and good people. I’ve always embraced different cultures and languages, and I’ve found it fascinating to learn from people who have different perspectives and ways of thinking. I’ve never seen cultural differences as challenges but rather as opportunities to grow and understand the world from a broader viewpoint. It’s this curiosity and openness to learning that I aim to bring into my classroom, encouraging my students to appreciate the diversity around them. I believe all students, no matter where they are in the world, deserve the same care and attention, and I strive to teach and learn from them in return. My mission is to educate not just within one country but internationally, spreading knowledge across cultures.
</p>
  `,
  ];
}
