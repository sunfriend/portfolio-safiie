import { Component, HostListener, OnInit } from '@angular/core';
import { PortfolioContentComponent } from '../portfolio-content/portfolio-content.component';

@Component({
  selector: 'app-home',
  imports: [PortfolioContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public imageSrc: string = '';

  // Define your breakpoints (e.g., for mobile, tablet, desktop)
  mobileImageSrc: string = 'assets/images/hamline-mobile.jpg';
  tabletImageSrc: string = 'assets/images/hamline.jpg';
  desktopImageSrc: string = 'assets/images/hamline-3.jpg';



  ngOnInit(): void {
    this.setImageSource(window.innerWidth);
  }
  private setImageSource(width: number): void {
    if (width <= 630) {
      this.imageSrc = this.mobileImageSrc;
    } else if (width >= 631 && width < 700) {
      this.imageSrc = this.tabletImageSrc;
    } else if (width >= 700) {
      this.imageSrc = this.desktopImageSrc;
    }
  }


  public contentBlocks: string[] = [
  `
## About Me

![Profile Photo](assets/images/my-photo.jpg)

I was born in Crimea, the southern peninsula of Ukraine. I am Crimean Tatar, a member of the indigenous people of Crimea—a Muslim, Turkic-speaking community and the largest ethnic minority in Ukraine. Despite a long history of persecution and forced displacement, particularly following Russia’s occupation of Crimea, the Crimean Tatar people have preserved their cultural identity, values, and resilience. One of our most deeply held values is the importance of education, which shaped my upbringing and continues to guide my academic and professional journey.

I grew up in a family where education was always a priority. My brother and I attended the best public school available to us, and we were encouraged from an early age to pursue academic excellence. As a minority student, school became a place of safety and belonging for me. I admired my teachers, especially those who helped me better understand my language, culture, and identity. It was during these formative years that I first envisioned myself becoming a teacher—someone who could support students academically while affirming who they are.

My life changed dramatically when Russia invaded Crimea. Faced with political instability and limited educational opportunities, I made the difficult decision to leave my homeland and pursue higher education abroad. I moved to Turkey, where I was granted the Türkiye Bursları Scholarship, which enabled me to continue my studies in a stable and academically rigorous environment. While studying in Turkey, I also participated in the International Students Academy in Eskişehir, a program designed to support international students through academic enrichment, cultural exchange, and intellectual development. This experience allowed me to engage with students from diverse backgrounds, participate in seminars and workshops, and further strengthen my intercultural and academic perspective.

In Turkey, I completed my university education in a field that allowed me to gain strong analytical and academic skills while supporting my family during a difficult period. My education there exposed me to diverse perspectives, multilingual learning environments, and international academic standards. These experiences deepened my interest in education, curriculum development, and teacher preparation, and they laid the foundation for my long-term academic goals.

My academic journey later led me to the United States, where I earned a Master of Arts in Education with an Educator License from Hamline University. At Hamline, I developed a strong foundation in pedagogy, curriculum design, assessment, and culturally responsive teaching. My graduate studies strengthened my commitment to supporting multilingual and immigrant learners while grounding my teaching practice in research-based educational theory. The combination of my academic background in Turkey and my professional preparation in the United States has shaped my desire to pursue doctoral-level research in education.
`,
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = window.innerWidth;
    this.setImageSource(width); // Update image source on window resize
  }
}
