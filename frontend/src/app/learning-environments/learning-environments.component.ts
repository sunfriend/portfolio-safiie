import { Component } from '@angular/core';
import { PortfolioContentComponent } from "../portfolio-content/portfolio-content.component";

@Component({
  selector: 'app-learning-environments',
  imports: [PortfolioContentComponent],
  templateUrl: './learning-environments.component.html',
  styleUrl: './learning-environments.component.scss'
})
export class LearningEnvironmentsComponent {
contentBlocks: string[] = [`
  <p>This <a href='https://docs.google.com/document/d/1_vP8imgfjNyxLnKcFCoxrewJdVaRDS0gK8WExlFqgOo/edit?tab=t.0' aria-label='writing assignment'>Writing Assignment</a> from my literacy methods course demonstrates my understanding of this SEP. In the assignment, I reflected on my past learning environments and compared them to the classroom I hope to create. While it focused on the inclusion of oral literacy, it also highlighted the kind of learning space I want for my students. I want them to feel safe, comfortable, and supported, where they can be themselves and grow. Building strong relationships with students is key to creating this environment, and understanding each student’s personality and ambitions will guide my teaching. I aim to create a culture of support, kindness, and a shared desire to learn and grow, ensuring every student feels valued and empowered.</p>
  <p>This <a href='https://docs.google.com/document/d/1cHRhy02NstrxTtIToA7TC_-kWLaJe2lutAUuUhZxe5Y/edit?tab=t.0' aria-label='Book Review'>Book Review</a> assignment I completed in my Teaching Literacy class focused on Josie Dances, a book about a Native American girl who dreams of becoming a dancer. I read this book to my second graders as part of the assignment to explore how literature can represent different cultures. To create a safe and inclusive classroom, it’s essential to expose students to books that reflect diverse cultural perspectives. Josie Dances provided an opportunity for my students to learn about Native American culture and the importance of pursuing one’s dreams. By incorporating diverse books like this into literacy instruction, I aim to foster an environment where all students feel respected and connected to the material, aligning with Standard 8, F, which emphasizes understanding and incorporating the cultural content, worldviews, and perspectives of Minnesota-based American Indian Tribal Nations and communities.
</p>
  <p>Coming from a background in different educational methods, I have had the chance to reflect deeply on the importance of cultural awareness in the classroom. In Ukraine, where I attended school under a Soviet Union-based education system, the methods were largely built on punishment and fear, which often created a stressful environment for students. Witnessing this has strongly influenced my desire to work hard to become an educator who fosters a positive, welcoming, and inclusive classroom environment where students feel safe and excited to come to school. I believe that building a culturally responsive classroom is crucial, where students' identities, backgrounds, and cultures are respected and celebrated. This mindset aligns with Standard 8, F, which emphasizes the importance of understanding and incorporating the cultural perspectives and histories of the communities we teach, ensuring that every student feels valued and understood.</p>
  <p>When I begin student teaching, my goal is to create a classroom that is inclusive, where all students feel valued, respected, and understood regardless of their cultural backgrounds. I will focus on incorporating diverse literature, materials, and activities that reflect the histories and perspectives of various cultures, including those of Minnesota-based American Indian Tribal Nations. By creating a culturally responsive environment, I aim to foster a sense of belonging and ensure that every student feels connected to the learning process. I want to encourage critical thinking and empathy in my students, helping them appreciate and respect the diversity of experiences and identities in the classroom. This approach will align with Standard 8, F, as I strive to be an educator who understands and values the cultural content, worldviews, and histories of the communities I serve.
</p>
  `];
headerTitlePhrase: string|undefined = `
  "The teacher understands and supports students as they recognize and process dehumanizing biases, discrimination, prejudices, and structural inequities." - Standard 2, E. 
`;

}
