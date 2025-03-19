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
  <p></p>
  `];
headerTitlePhrase: string|undefined = `
  "The teacher understands and supports students as they recognize and process dehumanizing biases, discrimination, prejudices, and structural inequities." - Standard 2, E. 
`;

}
