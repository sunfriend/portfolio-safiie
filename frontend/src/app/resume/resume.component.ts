import { Component } from '@angular/core';
import { PortfolioContentComponent } from "../portfolio-content/portfolio-content.component";

@Component({
  selector: 'app-resume',
  imports: [PortfolioContentComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
contentBlocks: string[] = [`
  <!-- Name Centered -->
<p style="text-align: center; font-weight: bold; font-size: 24px;">S A F I I E S E I T A P T I I E V A</p>

<!-- Contact Info (Now Left-Aligned) -->
<div style="max-width: 600px;">
  <p style="font-weight: bold;">C O N T A C T</p>
  <p>📞 +1 (651)-795-9204</p>
  <p>📧 safieseytaptieva@gmail.com</p>
  <p>📍 999 41 Ave NE, Columbia Heights, MN</p>
</div>

<!-- Summary Section -->
<p style="font-weight: bold; text-align: center;">Teaching Portfolio</p>
<p style="text-align: center;">Passionate and dedicated educator with a strong background in elementary education, student engagement, and curriculum development. Committed to creating a supportive learning environment, fostering creativity, and promoting student success.</p>

<!-- Two-Column Layout: Education & Skills -->
<div style="display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap;">
  <div style="flex: 1 1 48%;">
    <p style="font-weight: bold;">E D U C A T I O N</p>
    <p><strong>HAMLINE UNIVERSITY</strong><br>
       St. Paul, MN<br>
       Master of Education with Elementary Teaching License<br>
       <em>Aug 2023 - Current</em></p>

    <p><strong>ESKISEHIR OSMANGAZI UNIVERSITY</strong><br>
       Eskisehir, Turkey<br>
       Bachelor of Civil Engineering and Architecture<br>
       <em>Sep 2015 - May 2022</em></p>
  </div>

  <div style="flex: 1 1 48%;">
    <p style="font-weight: bold;">S K I L L S</p>
    <ul>
      <li>✅ Strong Classroom Management</li>
      <li>✅ Student Engagement & Instructional Strategies</li>
      <li>✅ Lesson Planning & Curriculum Development</li>
      <li>✅ Multicultural Teaching & Language Support</li>
      <li>🏅 Certified in First Aid and CPR</li>
      <li>🏅 Certified in Pediatric Epilepsy Management</li>
      <li>🏅 Certified in MN Child Welfare Training Academy</li>
    </ul>
  </div>
</div>

<!-- Two-Column Layout: Work Experience & Certifications -->
<div style="display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap;">
  <div style="flex: 1 1 48%;">
    <p style="font-weight: bold;">W O R K  E X P E R I E N C E</p>

    <p><strong>Horizon Science Academy</strong><br>
       <em>Second Grade Teacher</em><br>
       <strong>JUL 2022 - PRESENT</strong></p>
    <ul>
      <li>Designed and delivered engaging lesson plans for diverse learners.</li>
      <li>Provided academic support to underserved students, improving their performance.</li>
      <li>Collaborated with staff to implement innovative teaching methods.</li>
      <li>Conducted progress reports and maintained strong communication with parents.</li>
    </ul>

    <p><strong>Avid 4 Adventure</strong><br>
       <em>Outdoor Activities Instructor (Kayaking, Canoeing, Biking, Stand-Up Paddleboarding)</em><br>
       <strong>May 2023 - Sep 2023</strong></p>
    <ul>
      <li>Led and supervised children (ages 4-15) in various outdoor activities.</li>
      <li>Ensured safety and engaged students in teamwork-building exercises.</li>
      <li>Maintained contact with camper families, addressing student needs and concerns.</li>
    </ul>

    <p><strong>Eskişehir Amerikan Kültür Dil Okulları</strong><br>
       <em>Part-time Assistant English Teacher</em><br>
       <strong>Sep 2019 - May 2022</strong></p>
    <ul>
      <li>Supported students (ages 5-9) as an English Teaching Assistant.</li>
      <li>Assisted children in preparing for international education opportunities.</li>
      <li>Used storytelling and cultural exchange to enhance language development.</li>
    </ul>
  </div>

  <div style="flex: 1 1 48%;">
    <p style="font-weight: bold;">C E R T I F I C A T I O N S & A W A R D S</p>
    <ul>
      <li>🏆 Aspiring Teachers of Color Scholarship (2024-2025)</li>
      <li>🏆 The International Student's Academy Award (2019)</li>
      <li>🏆 Türk ve Akraba Toplulukları Grant (Turkey Scholarships, 2015)</li>
    </ul>
  </div>
</div>

<!-- Languages Section (Single Column) -->
<p style="font-weight: bold;">L A N G U A G E S</p>
<ul>
  <li>🗣️ English (Fluent)</li>
  <li>🗣️ Ukrainian (Fluent)</li>
  <li>🗣️ Turkish (Fluent)</li>
  <li>🗣️ Russian (Fluent)</li>
</ul>

  `];
headerTitlePhrase: string|undefined;

}
