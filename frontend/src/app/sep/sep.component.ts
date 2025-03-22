import { Component } from '@angular/core';
import { PortfolioContentComponent } from "../portfolio-content/portfolio-content.component";

@Component({
  selector: 'app-sep',
  imports: [PortfolioContentComponent],
  templateUrl: './sep.component.html',
  styleUrl: './sep.component.scss'
})
export class SepComponent {
contentBlocks: string[] = [
  `
  <p>Within each SEP, the hyperlinks provided in the writings will bring you straight to the Google Docs, Google Slides, or Canva site that was used to create it. Each document should allow viewing. For easier viewing, each document is also provided in screnshot form in the labeled subsection beneath each SEP heading. </p>
  `
];
headerTitlePhrase: string|undefined;

}
