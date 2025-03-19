import { Component } from '@angular/core';
import { PortfolioContentComponent } from "../portfolio-content/portfolio-content.component";

@Component({
  selector: 'app-student-learning',
  imports: [PortfolioContentComponent],
  templateUrl: './student-learning.component.html',
  styleUrl: './student-learning.component.scss'
})
export class StudentLearningComponent {
  public headerTitlePhrase = `
    "The teacher understands how alignment with a student's cultural background is necessary to make meaningful connections..." - Standard 1, D. 
  `
  public contentBlocks: string[] = [
    `
    <p>As outlined in Standard 1, D, which emphasizes the importance of aligning teaching with a student's cultural background to make meaningful connections, I intentionally adapted my teaching strategies to meet the diverse needs of my students. Working in a school with a predominantly Somali student population and a small group of Spanish-speaking students, I recognized the importance of ensuring that my teaching practices were both inclusive and culturally responsive. I worked with three students, each with distinct backgrounds: one was proficient in English but needed support with reading, another was still learning English after moving from Honduras a year ago, and the third primarily spoke Somali but excelled in math, despite the language barrier in the problems. Being from a different cultural background myself, I understand the impact that feeling seen and understood in the classroom can have on a student's confidence and learning. This understanding guided my approach. I created a <a href="https://docs.google.com/document/d/1WP-6v7WzmHJeLX4ZR6pESachFpPYvrskKDdki0emlm0/edit?tab=t.0#bookmark=id.h0xmy77qrxzy" aria-label="Case Study">Case Study</a> , which included lesson plans, that incorporated visual aids, manipulatives, and translated visuals in the students' native languages. These tools helped bridge language gaps and made the content more tangible, allowing my students to engage with the material in a more meaningful way. By aligning my teaching with the cultural and linguistic needs of my students, I was able to create a more supportive and inclusive environment. I witnessed firsthand how visual support and manipulatives, especially when accompanied by language translation, could empower students to access and understand math content. This experience reinforced my belief that recognizing and honoring students' cultural and linguistic backgrounds is essential for fostering not only understanding but also a sense of pride and connection in their learning journey. It’s not just about teaching content; it’s about ensuring that each student feels valued and capable of succeeding.
</p>
    <p>I further explored this standard through a <a href="https://docs.google.com/document/d/1VlLmFkesXbj9EmztCX21ifiZgG3ai3tKTE70CqP-EaQ/edit?tab=t.0" aria-label="Lesson Plan">Lesson Plan</a> I created for a sixth-grade language arts class. In this hour-long lesson, students compared and contrasted Dakota and Ojibwe Native American cultures. I carefully developed the lesson with my students’ identities in mind, ensuring it was culturally responsive and inclusive. Understanding students' diverse backgrounds was crucial, as the lesson encouraged them to connect with the material and share their perspectives. The lesson also included strategies for supporting English language learners and students needing additional help. This approach aligns with Standard 1, D by honoring the cultural backgrounds of my students to enhance learning and engagement.</p>
    <p>In my clinical experience, I worked with a small group of students in a school with a predominantly Somali population and a small number of Spanish-speaking students. This experience directly connected with the SEP, as I had to adapt my teaching strategies to support their diverse linguistic and cultural backgrounds. For example, I created a lesson plan that incorporated visual aids, manipulatives, and translated visuals in students' native languages. These strategies helped bridge language gaps and made the math content more accessible, allowing my students to engage more meaningfully with the lesson. By recognizing the importance of aligning my teaching with the students' cultural and linguistic needs, I was able to foster a more inclusive learning environment.
</p>
    <p>As I begin student teaching, my goal is to deepen my understanding of how students’ cultural and linguistic backgrounds impact their learning experiences. I want to continue building my skills in tailoring lessons to meet the diverse needs of students, especially English language learners and those from different cultural backgrounds. I aim to develop more strategies that support these students, such as using culturally relevant materials and more language-specific accommodations. Additionally, as a person whose third language is English, I plan to openly share aspects of my own cultural background with students, positioning myself as a model for how we can all learn from one another’s diverse experiences. This will help create a classroom environment where students feel comfortable discussing their identities, fostering mutual respect and a stronger sense of community. As I gain more experience, I will continue to prioritize making connections with my students and adapting my teaching practices to ensure their success.</p>
    `
  ]
}
