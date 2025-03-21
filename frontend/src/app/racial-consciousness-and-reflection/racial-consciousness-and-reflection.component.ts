import { Component } from '@angular/core';
import { PortfolioContentComponent } from "../portfolio-content/portfolio-content.component";

@Component({
  selector: 'app-racial-consciousness-and-reflection',
  imports: [PortfolioContentComponent],
  templateUrl: './racial-consciousness-and-reflection.component.html',
  styleUrl: './racial-consciousness-and-reflection.component.scss'
})
export class RacialConsciousnessAndReflectionComponent {
contentBlocks: string[] =[];
headerTitlePhrase: string|undefined;

}
