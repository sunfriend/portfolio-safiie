import { Component } from '@angular/core';
import { PortfolioContentComponent } from '../portfolio-content/portfolio-content.component';

@Component({
  selector: 'app-assessment',
  imports: [PortfolioContentComponent],
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss',
})
export class AssessmentComponent {
  public contentBlocks = [
    `
    <p>In my Mathematics Methods course, I developed a second-grade <a href="https://docs.google.com/document/d/1bD4UXtHfjfF5L-cEi6RrV_6ozISKqTPGDAtp4QrShgE/edit?tab=t.0" aria-label="lesson plan">Lesson Plan</a> that aligns with Standard 3, H by incorporating both formative and summative assessments. The lesson focused on reinforcing place value concepts, such as tens and ones, decomposing two-digit numbers, and expanded notation. Students will complete a place value test as a summative assessment, where they will decompose numbers and write them in expanded notation. Throughout the lesson, I used formative assessments, including verbal explanations during peer discussions and an exit ticket, where students reflected on their understanding. I also used visual aids like base-ten blocks to ensure all students, regardless of language proficiency or learning needs, could access the material. By monitoring participation and providing feedback, I was able to adjust support based on individual needs, ensuring a fair and comprehensive evaluation of their understanding.</p>
    <p>My second piece of evidence for this SEP is a <a href="https://docs.google.com/document/d/1VlLmFkesXbj9EmztCX21ifiZgG3ai3tKTE70CqP-EaQ/edit?tab=t.0" aria-label="Lesson Plan">Lesson Plan</a> I created for a 6th-grade class, focusing on comparing and contrasting the Ojibwe and Dakota tribes. In this lesson, students engage in both formative and summative assessments to gauge their progress. For the formative assessment, I use a speaking task, allowing me to listen to my students, record, and analyze their interactions in a variety of settings, including whole group, small group, pairs, or one-on-one with me. Students work in pairs to research and select two pieces of evidence describing the Ojibwe and Dakota tribes. After exchanging information, they practice explaining their findings, with the teacher providing feedback before they finalize their work. For the summative assessment, students create a Venn diagram comparing the two tribes, using historical facts, vocabulary, and evidence. They will present their findings to the class, explaining the similarities and differences between the tribes. The project is assessed based on accuracy, depth of information, and use of evidence, allowing students to demonstrate their understanding of the material in a meaningful and comprehensive way.
</p>
    <p>In my time working with K-12 students during clinicals, I have observed and applied various formative and summative assessment strategies, which align with Standard 3, H. One significant experience was during my time in a second-grade classroom, where I implemented a lesson plan focused on place value and number decomposition. I utilized formative assessments, such as listening to students describe their understanding during pair discussions and observing their use of visual tools like base-ten blocks. This allowed me to monitor student progress throughout the lesson and make real-time adjustments to my teaching. Additionally, I incorporated an exit ticket to gauge individual student comprehension, ensuring they were prepared for the summative assessment at the end of the unit. These experiences helped me understand the importance of using diverse assessment tools to measure student learning accurately, while being mindful of their unique cultural and linguistic backgrounds.
</p>
    <p>When I begin student teaching, I aim to build upon my previous experiences by continuing to refine my ability to use formative assessments in a way that supports all students, especially those from diverse backgrounds. I will focus on using a variety of assessment tools, such as peer discussions, exit tickets, and self-assessment opportunities, to gain a comprehensive understanding of each student's progress. My goal is to create a learning environment where assessments serve as a tool for growth, allowing me to adjust my instruction based on student needs. I also want to continue developing my ability to recognize when students need additional support and how to scaffold instruction in a way that is both inclusive and nondiscriminatory. By doing so, I hope to ensure that every student has an opportunity to succeed and demonstrate their understanding effectively.</p>
    `,
  ];
  headerTitlePhrase: string = `
"The teacher uses assessment strategies and devices that are nondiscriminatory, and takes into consideration the impact of disabilities, methods of communication, cultural background, and primary language on measuring knowledge and performance of students." - Standard 3, H. 

`;
}
