import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-content',
  imports: [CommonModule],
  templateUrl: './portfolio-content.component.html',
  styleUrl: './portfolio-content.component.scss'
})
export class PortfolioContentComponent {
  constructor(private sanitizer: DomSanitizer) {}
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() contentBlocks: string[] = [];
  @Input() headerTitle: string = 'Default Header'; // Default header title
  @Input() headerTitlePhrase: string | undefined;

   // Function to sanitize HTML content
   get sanitizedContent(): SafeHtml[] {
    return this.contentBlocks.map(block => this.sanitizer.bypassSecurityTrustHtml(block));
  }
}
