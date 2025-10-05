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
  <h2>About Me</h2>
 <div style="display: flex; align-items: flex-start; flex-wrap: wrap;">
    <img src="assets/images/my-photo.jpg" 
         style="width: 200px; max-width: 100%; height: auto; margin-right: 20px; flex-shrink: 0;">
    <div style="flex: 1; min-width: 300px;">
        <p>I was born in Crimea, the southern peninsula of Ukraine. I am Crimean Tatar. We are the indigenous people of Crimea, a Muslim, Turkic-speaking people, the largest ethnic minority of Ukraine. Though my nation has been continually persecuted by Russia and slowly forced out of the peninsula, we remain a proud and independent people, clinging fast to our traditions and values. And one of those values is the importance of education. I grew up in a family in which education was always a priority. My brother and I attended the best public school available to us, and we were urged to continue on with our education.</p>
        
        <p>As a child growing up as a minority, surrounded by people who sometimes despised us, I always found comfort in school and admired my teachers—especially those who helped me better understand my language and culture. I often thought to myself, “I will be a teacher when I grow up.” But as the time neared for making those decisions, life radically changed in Crimea. When Russia invaded my homeland, I chose to leave and pursue my dream of studying abroad. I moved to Turkey, where I could study in a field that promised a higher-paying job and provided much-needed support for my family back in Crimea. From a young age, I had always wanted to study abroad, to learn new languages, and to find success in an international environment. These experiences continue to inspire my path as an educator.</p>

        <p>I graduated from a university in Turkey with a dream of continuing my education and earning a higher degree in the United States. But then my life took another radical turn when I was offered the opportunity to teach first grade in a school that serves disadvantaged students. I found myself facing a classroom of 24 six-year-olds, mostly Somali students, and I fell in love with teaching and all those aspirations to emulate the teachers of my youth came back to me. I knew that what I truly wanted to be was a teacher.</p>

        <p>As an immigrant living far from my homeland, working with children provides a meaningful way to stay connected, develop new skills, and continue growing in my professional journey. ​​I have always embraced new cultures and languages, and I’ve found it fascinating to learn from people who have different perspectives and ways of thinking. I’ve never seen cultural differences as challenges but rather as opportunities to grow and understand the world from a broader viewpoint. It’s this curiosity and openness to learning that I aim to bring into my classroom, encouraging my students to appreciate the diversity around them.</p>

        <p>For me, students are all the same—no matter where they are in the world. As soon as I become their teacher, they become my responsibility. I believe that regardless of where I teach, they will learn from me, and I will learn from them in return. My mission is not only to educate within the borders of one country but also to spread this knowledge and experience internationally, contributing to teaching in different cultures.</p>
    </div>
</div>
`,
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = window.innerWidth;
    this.setImageSource(width); // Update image source on window resize
  }
}
