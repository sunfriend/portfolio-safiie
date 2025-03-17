import { Component } from '@angular/core';
import { PortfolioContentComponent } from "../portfolio-content/portfolio-content.component";

@Component({
  selector: 'app-collaboration-and-leadership',
  imports: [PortfolioContentComponent],
  templateUrl: './collaboration-and-leadership.component.html',
  styleUrl: './collaboration-and-leadership.component.scss'
})
export class CollaborationAndLeadershipComponent {
contentBlocks: string[] = [`
  <p>Collaboration between teachers, families, support staff, and students is essential in creating a successful educational experience. I wrote a <a href="https://docs.google.com/document/d/19rA0cfciQb9dB3eL6d7rfyavkaQftSpbRCqO0ApMEYw/edit?tab=t.0" aria-label="Chapter Summary" >Chapter Summary</a> on the importance of collaboration, where I reflected on how critical it is to maintain open, consistent, and positive communication with parents. I believe that communication should not only occur when there are issues but should be a regular practice that includes both the challenges and successes of a student’s learning. This ensures parents feel valued and involved in their child's education. Through the chapter, I learned that by approaching these interactions with a culturally responsive lens, I can better address students’ unique needs and ensure they receive the appropriate services. This aligns with Standard 7, B, which emphasizes the importance of collaborating with families to support student learning and securing services that meet individual needs. I also realized how crucial it is to work with support staff, ensuring that every student receives the accommodations and services they require. Ultimately, I see education as a team effort, and I aim to foster a community of collaboration in my classroom, making it a norm to enhance student success.
</p>
  <p>In this <a href="https://docs.google.com/document/d/1XT3F2ZZbQmYGRBe6thtiXxe8ux2SNk5hNmePZ3hJ8l4/edit?usp=sharing" aria-label="Evaluation">Evaluation</a> about me by one of the cooperating teachers I worked with during my clinical experience, she spoke highly of my abilities. I had the opportunity to closely collaborate with her in teaching 6th-grade science lessons and leading student activities. I also observed various co-teaching models used by her and a colleague, which deepened my understanding of how collaboration can benefit both teachers and students. Her feedback during my evaluation helped me refine my teaching skills, especially in large-group instruction. This experience has strengthened my desire to pursue co-teaching opportunities throughout my career.
</p>
  <p>During my time working as a second-grade teacher, I have learned the immense value of collaboration within the school community. I regularly communicate with parents to keep them updated on their child's progress and work together to support their child's learning. However, I recognize that it can sometimes be challenging, as parents come from different backgrounds and may have varying expectations or communication styles. I also engage with other teachers who work with my students in different subjects, as this collaborative effort ensures a holistic approach to meeting each student's needs. Whether it is through co-teaching, planning together, or discussing students' progress, these conversations help me better understand how to adjust my instruction to fit each child's unique learning style and needs. These experiences align with the SEP, as they have helped me understand the importance of collaboration and how working together with other educators and families benefits student learning.
</p>
  <p>As I begin student teaching, my goal is to further refine my collaboration skills by actively communicating with parents, fellow teachers, and support staff. I want to ensure that all of my students receive the support they need, and I will use collaboration to differentiate my instruction, ensuring it meets the diverse needs of my learners. I plan to engage with other educators to create a well-rounded, culturally responsive, and supportive learning environment, ultimately helping each student achieve their learning goals.
</p>
  `];
headerTitlePhrase: string|undefined = `
"The teacher knows how to collaborate with a culturally relevant and responsive lens with families to support student learning and secure appropriate services to meet the needs of students." - Standard 7, B. `;

}
