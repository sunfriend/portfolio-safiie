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
## School Experience:

I am in the process of earning my **Master of Education** with a focus on **Elementary Teaching** from **Hamline University** in St. Paul, Minnesota. This program has equipped me with in-depth knowledge of educational theories, pedagogical strategies, and the skills needed to foster a positive and effective learning environment. I am currently pursuing my degree and look forward to further expanding my expertise in elementary education.

I also completed my undergraduate degree in **Civil Engineering and Architecture** from **Eskişehir Osmangazi University** in Turkey. Although my academic background was in engineering, my passion for teaching led me to shift focus toward education, blending my problem-solving and critical thinking skills with my commitment to teaching.

## Work Experience:

In terms of work experience, I currently work as a **Second Grade Teacher** at **Horizon Science Academy**, where I design and deliver engaging lesson plans, provide individualized academic support, and collaborate with my colleagues to enhance our students' learning experiences. My role involves creating an inclusive classroom environment where all students can succeed and thrive.

Additionally, I have had the opportunity to work with **Avid 4 Adventure** as an Outdoor Activities Instructor, where I led and supervised children in various outdoor activities like kayaking, biking, and stand-up paddleboarding. This position helped me develop leadership skills and taught me the importance of teamwork and safety in an outdoor setting.

In the past, I also worked as an **Assistant English Teacher** at **Eskişehir Amerikan Kültür Dil Okulları**, where I supported young learners in their English language development through storytelling, interactive activities, and cultural exchange.

This blend of academic and practical teaching experience allows me to adapt to diverse learning needs and create meaningful educational experiences for all my students.
  `];
headerTitlePhrase: string|undefined;

}
