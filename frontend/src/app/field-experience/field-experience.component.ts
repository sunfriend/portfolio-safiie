import { Component } from '@angular/core';
import { PortfolioContentComponent } from "../portfolio-content/portfolio-content.component";

@Component({
  selector: 'app-field-experience',
  imports: [PortfolioContentComponent],
  templateUrl: './field-experience.component.html',
  styleUrl: './field-experience.component.scss'
})
export class FieldExperienceComponent {
  public contentBlocks = [`
    <h2>Field Experience Record</h2>
  <table border="1" cellspacing="0" cellpadding="8">
    <thead>
      <tr>
        <th>Course Name</th>
        <th>School District</th>
        <th>School</th>
        <th>Hours On-site</th>
        <th>Semester</th>
        <th>Grade Level</th>
        <th>Subject</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>GED 7815 School and Society</td>
        <td>Richfield</td>
        <td>Horizon Science Academy</td>
        <td>3 days school tours</td>
        <td>Fall 2023</td>
        <td>2</td>
        <td></td>
      </tr>
      <tr>
        <td>GED 7867 Theory to Practice</td>
        <td>Mounds View Public Schools</td>
        <td>Chippewa Middle School</td>
        <td>3 days</td>
        <td>Spring 2024</td>
        <td>6th</td>
        <td>Earth Science</td>
      </tr>
      <tr>
        <td>GED 7872 Exceptionality</td>
        <td>St. Paul Public Schools</td>
        <td>Murray Middle School</td>
        <td>5 hours</td>
        <td>Winter 2024</td>
        <td>6th-8th</td>
        <td>Special Education</td>
      </tr>
      <tr>
        <td>GED 7852 Teaching Mathematics</td>
        <td>Richfield</td>
        <td>Horizon Science Academy</td>
        <td>30 hours</td>
        <td>Fall 2024</td>
        <td>2</td>
        <td>Math</td>
      </tr>
    </tbody>
  </table>
`]
}
