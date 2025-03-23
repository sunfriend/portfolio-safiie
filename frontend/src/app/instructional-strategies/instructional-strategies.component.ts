import { Component } from '@angular/core';
import { PortfolioContentComponent } from "../portfolio-content/portfolio-content.component";

@Component({
  selector: 'app-instructional-strategies',
  imports: [PortfolioContentComponent],
  templateUrl: './instructional-strategies.component.html',
  styleUrl: './instructional-strategies.component.scss'
})
export class InstructionalStrategiesComponent {
contentBlocks: string[] = [`
  <p>As part of my goal to provide a well-rounded learning experience, I created a this <a target="_blank" href='https://docs.google.com/presentation/d/1UUgSgc5yRHhDT2wiyEOmiptrovzzYN83HDQoq83_nYE/edit#slide=id.g279ca60ea7d_0_61' aria-label='Presentation'>Presentation</a> for first grade focused on the concepts of vibration and sound. To connect this lesson to literacy, I read the students a book about sound, helping them make connections between the scientific concept and real-world applications. The lesson culminated in a hands-on experiment, allowing students to actively engage in the scientific process and develop their understanding through experiential learning. This approach aligns with Standard 5, H, as it nurtures critical thinking by incorporating multiple perspectives and encouraging students to engage with the material actively. By designing this presentation, I sought to offer students an opportunity to explore scientific concepts through both cognitive and experiential means, fostering curiosity and critical thinking. Additionally, integrating literacy with science content creates an inclusive learning environment that supports diverse ways of knowing, demonstrating my ability to design lessons that meet content standards while considering broader cultural and educational perspectives.
</p>
  <p>For my Language Arts course, I created a <a target="_blank" href='https://docs.google.com/presentation/d/13tTI5d_8Yd7FPf0i1TxWPY9tX1wzs_DwFQduJspNWMU/edit#slide=id.g2cb01bbcbd5_0_520' aria-label='Google Slides'>Google Slides</a> focused on comparing Ojibwe and Dakota Native American cultures. I delivered a microteaching session to my peers and designed a slide to accompany it. The lesson incorporated strategic group work and partner discussions as key methods. I began the lesson with group work as a warm-up, allowing students to engage in collaborative learning right from the start. This strategy encourages peer interaction, helping students share and explore different perspectives on the topic. Group work and partner discussions promote deeper understanding through active engagement, as students can discuss their ideas and challenge one another’s thinking. These strategies are particularly effective because they foster critical thinking and help students communicate their thoughts clearly while developing a more nuanced understanding of the material. By working together, students are able to combine their diverse perspectives and create a more comprehensive understanding of the topic. This method aligns well with promoting inclusivity and higher-order thinking, allowing students to engage in a more dynamic, interactive learning experience.
</p>
  <p>During my time working as an English teacher assistant in Turkey, I had the opportunity to teach students ranging from 5 to 10  years old, which provided me with valuable experience in working with diverse age groups. With younger students, I utilized Montessori-inspired strategies, incorporating hands-on activities and movement to help teach language. For example, instead of group activities, we focused on one-on-one interactions where I used objects they could hold and engage with to teach new vocabulary, making the learning process more tactile and personalized. This approach aligns with the SEP by fostering an environment where students can actively participate in their learning through different methods, allowing for individual attention and a deeper connection with the content.
</p>
  <p>When I begin student teaching, my goal is to explore and experiment with a variety of instructional strategies to find the most effective ways to engage students and promote their learning. I want to refine my ability to use differentiation and formative assessments to adjust my teaching and meet individual student needs. I aim to create an environment where students feel comfortable sharing their ideas and exploring different perspectives, ultimately fostering critical thinking and deeper understanding. My hope is to develop a flexible teaching style that incorporates diverse strategies to encourage student growth and participation.
</p>
  `];
headerTitlePhrase: string|undefined = `
"...the teacher demonstrates the ability to nurture critical thinking about culture and race and knows how to include multiple perspectives and missing narratives from the dominant culture..." - Standard 5, H. 
`;

}
