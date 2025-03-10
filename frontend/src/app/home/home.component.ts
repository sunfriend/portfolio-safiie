import { Component } from '@angular/core';
import { PortfolioContentComponent } from '../portfolio-content/portfolio-content.component';

@Component({
  selector: 'app-home',
  imports: [PortfolioContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public contentBlocks: string[] = [
    "I'm a full-stack developer with a passion for creating beautiful, responsive web applications.",
    "I have experience with a variety of technologies, including Angular, React, Node.js, and MongoDB.",
    "I'm always looking to learn new things and grow as a developer. I'm excited to work on new projects and collaborate with other developers.",

  ];
}
