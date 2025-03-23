import { Component, ElementRef, OnInit } from '@angular/core';
import { PortfolioContentComponent } from "../portfolio-content/portfolio-content.component";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pre-student-teaching',
  imports: [PortfolioContentComponent],
  templateUrl: './pre-student-teaching.component.html',
  styleUrl: './pre-student-teaching.component.scss'
})
export class PreStudentTeachingComponent {
contentBlocks: string[] = [];
headerTitlePhrase: string|undefined;
public pdfUrl: SafeResourceUrl;

constructor(private sanitizer: DomSanitizer) {
  const unsafeUrl = 'assets/files/student-teaching.pdf'; // Adjust path as needed
  this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
}

}
