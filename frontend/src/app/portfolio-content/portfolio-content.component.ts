import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { HoverService } from '../services/hover.service';

@Component({
  selector: 'app-portfolio-content',
  imports: [CommonModule, MarkdownModule],
  templateUrl: './portfolio-content.component.html',
  styleUrl: './portfolio-content.component.scss'
})
export class PortfolioContentComponent {
  constructor(private hoverService: HoverService) {}
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() contentBlocks: string[] = [];
  @Input() headerTitle: string | undefined; // Default header title
  @Input() headerTitlePhrase: string | undefined;
  @Input() imageStyle: string = '';


  // Angular will automatically sanitize HTML content
  get sanitizedContent(): string[] {
    return this.contentBlocks;
  }

  trackByFn(index: number, item: string) {
    return index; // Ensure Angular tracks items properly
  }

  sendImageCursorListener() {
    setTimeout(() => {
      console.log("Hover over image");
      this.hoverService.setHoverState(true);
    }, 500)
  }
}
