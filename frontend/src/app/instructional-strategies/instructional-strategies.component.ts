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
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  `];
headerTitlePhrase: string|undefined = `
"...the teacher demonstrates the ability to nurture critical thinking about culture and race and knows how to include multiple perspectives and missing narratives from the dominant culture..." - Standard 5, H. 
`;

}
