import { Component } from '@angular/core';
import { PortfolioContentComponent } from '../portfolio-content/portfolio-content.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  imports: [PortfolioContentComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  public resumeDocxUrl: string = 'assets/files/SAFIIE SEITAPTIEVA resume.docx';
  public resumePdfUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    const unsafeUrl = 'assets/files/SAFIIE SEITAPTIEVA resume.pdf';
    this.resumePdfUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }

  contentBlocks: string[] = [
    `
## Resume

Download my complete resume to learn more about my educational background, teaching experience, certifications, and qualifications.

<div style="text-align: center; margin: 40px 0;">
  <a href="assets/files/SAFIIE SEITAPTIEVA resume.docx" download="SAFIIE_SEITAPTIEVA_Resume.docx" style="display: inline-block; background-color: #244465; color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-size: 18px; font-weight: bold; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: background-color 0.3s;">
    📄 Download Resume
  </a>
</div>
  `,
  ];

  headerTitlePhrase: string | undefined;
}
