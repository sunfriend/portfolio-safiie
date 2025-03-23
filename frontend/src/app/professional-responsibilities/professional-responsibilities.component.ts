import { Component } from '@angular/core';
import { PortfolioContentComponent } from "../portfolio-content/portfolio-content.component";

@Component({
  selector: 'app-professional-responsibilities',
  imports: [PortfolioContentComponent],
  templateUrl: './professional-responsibilities.component.html',
  styleUrl: './professional-responsibilities.component.scss'
})
export class ProfessionalResponsibilitiesComponent {
headerTitlePhrase: string|undefined = `
"The teacher explores their own intersecting social identities and how they impact daily experience as an educator." - Standard 6, E. 
`;
contentBlocks: string[] = [
  `
  <p>In my Theory to Practice class, I participated in a <a target="_blank" href='https://docs.google.com/document/d/1ekChbtTY9KI5yaBXCseaIl2mXkzFIM34zvgptp8a7kM/edit?tab=t.0' aria-label='Microteaching Evaluation'>Microteaching Evaluation</a> assignment  where I delivered a lesson to my peers and received both self and peer evaluations. After the lesson, I reflected on the feedback I received, as well as my own self-assessment, to critically evaluate my performance. Through this process, I explored how my own intersecting social identities—such as my cultural background, gender, and experiences as an international educator—shaped my teaching approach and interactions with students. The feedback from my peers was invaluable in helping me identify areas where my social identity may have influenced my communication style or teaching methods, both positively and negatively. This process aligns with Standard 6, E, which emphasizes the importance of teachers exploring their own social identities and understanding how these identities impact their daily experience as an educator. Reflecting on this evaluation allowed me to recognize the need for continuous self-awareness and improvement, ensuring that I am creating an inclusive and responsive classroom environment that accounts for the diverse needs of my students.</p>
  <p>In my Equity and Diversity class, I created a <a target="_blank" href='https://docs.google.com/presentation/d/136mvViy--0ttvEZYsu-Vhds6CF6ilF2QN75K-IwlU98/edit#slide=id.p' aria-label='Presentation'>Presentation</a> on Teachers Negotiating Different Communities, with a specific focus on urban education and how to better support students in urban school settings. I chose this topic because I wanted to gain a deeper understanding of the unique challenges urban educators face, such as resource scarcity, socioeconomic disparities, and the impact of community trauma. Through research and reflection, I learned how essential it is for teachers to recognize and respond to the diverse cultural, social, and economic backgrounds of urban students. This research also helped me explore how my own intersecting social identities—such as my background as an international educator—might influence my approach to teaching in urban environments. This aligns with Standard 6, E, which emphasizes how teachers should explore their own social identities and reflect on how they shape their daily experiences as educators. Understanding the complexities of urban education allowed me to see the importance of culturally responsive teaching and how being mindful of my own identity can help me better connect with and support students from diverse urban communities.
</p>
  <p>In both Turkey and the U.S., I’ve worked with diverse student populations, which helped me reflect on how my own intersecting social identities shape my teaching. In Turkey, I used Montessori strategies with young children, focusing on hands-on learning, while in the U.S., I worked with immigrant Somali students and upper-class white students at a summer camp. These experiences showed me how my cultural background influences my interactions with students and how their identities impact their learning. This connects to Standard 6, E, as it emphasizes how teachers must reflect on their own social identities and how they shape their daily experiences as educators.</p>
  <p>As I begin student teaching, my goal is to explore how my own intersecting social identities impact my teaching approach. I aim to reflect regularly on how my identity shapes my interactions with students and to create an inclusive, responsive classroom where all students feel valued. Understanding how my background influences my teaching will allow me to better support diverse students, aligning with Standard 6, E, which encourages teachers to examine their own identities and their impact on daily teaching practices.</p>
  `
];

}
