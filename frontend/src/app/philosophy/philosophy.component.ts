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
<p>My perspective on education has been shaped by a diverse range of experiences across different educational systems. Growing up in the Soviet Union’s rigid, memorization-focused environment, I learned the importance of structure and discipline but also questioned the lack of creativity and personal expression. As I moved to Turkey, I encountered an entirely different system that balanced structure with more interaction between teachers and students, fostering curiosity and creativity. When I arrived in the United States, I was introduced to student-centered methods like small group instruction and classroom centers, which allowed for more individualized attention and active participation. These experiences have deeply influenced my teaching philosophy. I have learned a great deal from my diverse educational experiences, including my early schooling—each one contributing to who I am as a teacher today. Ultimately, my journey has taught me that education is not just the transfer of knowledge; it should be a dynamic and inclusive process that encourages students to think critically, question assumptions, and grow both academically and personally. Education is not just about mastering subjects but about preparing students to become compassionate, ethical individuals ready to contribute positively to the world. I want to end my philosophy with a quote by Ban Ki-moon: “Education is a right, not a privilege, and it should be available to all children, regardless of their background or circumstances.”</p>
`];
headerTitlePhrase: string|undefined;

}
