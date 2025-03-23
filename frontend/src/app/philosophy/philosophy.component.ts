import { Component } from '@angular/core';
import { PortfolioContentComponent } from "../portfolio-content/portfolio-content.component";

@Component({
  selector: 'app-philosophy',
  imports: [PortfolioContentComponent],
  templateUrl: './philosophy.component.html',
  styleUrl: './philosophy.component.scss'
})
export class PhilosophyComponent {
contentBlocks: string[] = [`
  <p>My perspective on education has been shaped by a diverse range of experiences across different educational systems. Growing up in the Soviet Union’s rigid, memorization-focused environment, I learned the importance of structure and discipline but also questioned the lack of creativity and personal expression.In that system, we were not encouraged to discuss our opinions or challenge teachers. If we disagreed or tried to express our thoughts, it was not considered normal or acceptable. In that system, students were discouraged from discussing opinions or challenging teachers, which left me yearning for an environment where students could freely share their thoughts and feelings.</p>
  <p>As an educator now, I constantly reflect on how I can foster such an environment. How can I create a space where students feel comfortable expressing themselves and where their voices are heard without fear of judgment? This has become a central question in my teaching practice.</p>
  <p>One of the most significant experiences I gained while teaching in Turkey was learning the importance of teamwork in the classroom. In Turkey, I was introduced to more collaborative learning methods, where students worked together to solve problems and discuss ideas. When I arrived in the United States, I was introduced to student-centered methods like small group instruction and classroom centers, which allowed for more individualized attention and active participation. These experiences have deeply influenced my teaching philosophy, as I have come to understand that education should not only focus on the mastery of content but also on the development of the whole child.</p>
  <p>Another key part of my teaching philosophy is ensuring that students with Individualized Education Plans (IEPs) receive the support they need. In Ukraine, children with special needs were often excluded from regular schools and not accepted by society. This experience motivates me to create an inclusive classroom where every child, regardless of ability, is valued and given the support they need to thrive. It is essential that all students have the resources and encouragement to succeed in their learning journey.</p>
  <p>My goal as an educator is to foster an environment that encourages curiosity, creativity, and independent thinking, while also providing the structure and support students need to succeed. I want every student to feel safe expressing their thoughts and emotions, knowing they are heard and respected. My hope is that they leave my classroom with confidence in their ability to communicate, think critically, and contribute to society.</p>
  <p>I want to end my philosophy with a quote by Ban Ki-moon: “Education is a right, not a privilege, and it should be available to all children, regardless of their background or circumstances.”</p>
  `];
headerTitlePhrase: string|undefined;

}
