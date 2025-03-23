import { Component } from '@angular/core';
import { PortfolioContentComponent } from "../portfolio-content/portfolio-content.component";

@Component({
  selector: 'app-school-and-work-experience',
  imports: [PortfolioContentComponent],
  templateUrl: './school-and-work-experience.component.html',
  styleUrl: './school-and-work-experience.component.scss'
})
export class SchoolAndWorkExperienceComponent {
contentBlocks: string[] = [`
  <h2>School Experience:</h2>
  <p>I have a strong educational background, having earned my <b>Master of Education</b> with a focus on <b>Elementary Teaching</b> from <b>Hamline University</b> in St. Paul, Minnesota. This program has equipped me with in-depth knowledge of educational theories, pedagogical strategies, and the skills needed to foster a positive and effective learning environment. I am currently pursuing my degree and look forward to further expanding my expertise in elementary education.</p>
  <p>I also completed my undergraduate degree in <b>Civil Engineering and Architecture</b> from <b>Eskişehir Osmangazi University</b> in Turkey. Although my academic background was in engineering, my passion for teaching led me to shift focus toward education, blending my problem-solving and critical thinking skills with my commitment to teaching.</p>
  <h2>Work Experience:</h2>
  <p>In terms of work experience, I currently work as a <b>Second Grade Teacher</b> at <b>Horizon Science Academy</b>, where I design and deliver engaging lesson plans, provide individualized academic support, and collaborate with my colleagues to enhance our students' learning experiences. My role involves creating an inclusive classroom environment where all students can succeed and thrive.</p>
  <p>Additionally, I have had the opportunity to work with <b>Avid 4 Adventure</b> as an Outdoor Activities Instructor, where I led and supervised children in various outdoor activities like kayaking, biking, and stand-up paddleboarding. This position helped me develop leadership skills and taught me the importance of teamwork and safety in an outdoor setting.</p>
  <p>In the past, I also worked as an <b>Assistant English Teacher</b> at <b>Eskişehir Amerikan Kültür Dil Okulları</b>, where I supported young learners in their English language development through storytelling, interactive activities, and cultural exchange.
</p>
  <p>This blend of academic and practical teaching experience allows me to adapt to diverse learning needs and create meaningful educational experiences for all my students.</p>

  `];
headerTitlePhrase: string|undefined;

}
