import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-content',
  imports: [CommonModule],
  templateUrl: './portfolio-content.component.html',
  styleUrl: './portfolio-content.component.scss'
})
export class PortfolioContentComponent {
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() contentBlocks: string[] = [];
}
