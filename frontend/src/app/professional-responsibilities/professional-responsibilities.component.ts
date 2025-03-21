import { Component } from '@angular/core';
import { PortfolioContentComponent } from "../portfolio-content/portfolio-content.component";

@Component({
  selector: 'app-professional-responsibilities',
  imports: [PortfolioContentComponent],
  templateUrl: './professional-responsibilities.component.html',
  styleUrl: './professional-responsibilities.component.scss'
})
export class ProfessionalResponsibilitiesComponent {
headerTitlePhrase: string|undefined;
contentBlocks: string[] = [];

}
