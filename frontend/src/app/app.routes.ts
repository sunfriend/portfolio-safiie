// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { PhilosophyComponent } from './philosophy/philosophy.component';
// import { ResumeComponent } from './resume/resume.component';
// import { StudentLearningComponent } from './student-learning/student-learning.component';
// import { AssessmentComponent } from './assessment/assessment.component';
// import { PlanningForInstructionComponent } from './planning-for-instruction/planning-for-instruction.component';
// import { InstructionalStrategiesComponent } from './instructional-strategies/instructional-strategies.component';
// import { ProfessionalResponsibilitiesComponent } from './professional-responsibilities/professional-responsibilities.component';
// import { CollaborationAndLeadershipComponent } from './collaboration-and-leadership/collaboration-and-leadership.component';
// import { RacialConsciousnessAndReflectionComponent } from './racial-consciousness-and-reflection/racial-consciousness-and-reflection.component';

import { PhilosophyComponent } from './philosophy/philosophy.component';
import { ResumeComponent } from './resume/resume.component';
import { StudentLearningComponent } from './student-learning/student-learning.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { PlanningForInstructionComponent } from './planning-for-instruction/planning-for-instruction.component';
import { InstructionalStrategiesComponent } from './instructional-strategies/instructional-strategies.component';
import { ProfessionalResponsibilitiesComponent } from './professional-responsibilities/professional-responsibilities.component';
import { CollaborationAndLeadershipComponent } from './collaboration-and-leadership/collaboration-and-leadership.component';
import { RacialConsciousnessAndReflectionComponent } from './racial-consciousness-and-reflection/racial-consciousness-and-reflection.component';
import { PreStudentTeachingComponent } from './pre-student-teaching/pre-student-teaching.component';
import { LearningEnvironmentsComponent } from './learning-environments/learning-environments.component';
import { SchoolAndWorkExperienceComponent } from './school-and-work-experience/school-and-work-experience.component';
import { FieldExperienceComponent } from './field-experience/field-experience.component';
import { SepComponent } from './sep/sep.component';
import { LiteracyLogComponent } from './literacy-log/literacy-log.component';
import { TheoryToPracticeComponent } from './theory-to-practice/theory-to-practice.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { LiteracyWritingAssignmentComponent } from './literacy-writing-assignment/literacy-writing-assignment.component';
import { TheoryToPracticeLessonPlanComponent } from './theory-to-practice-lesson-plan/theory-to-practice-lesson-plan.component';
import { SocialStudiesLessonPlanComponent } from './social-studies-lesson-plan/social-studies-lesson-plan.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'philosophy', component: PhilosophyComponent },
  {path: 'pre-student-teaching', component: PreStudentTeachingComponent},
  { path: 'resume', component: ResumeComponent },
  { path: 'student-learning', component: StudentLearningComponent },
  {path: 'learning-environments', component: LearningEnvironmentsComponent},
  { path: 'assessment', component: AssessmentComponent },
  { path: 'planning-for-instruction', component: PlanningForInstructionComponent },
  { path: 'instructional-strategies', component: InstructionalStrategiesComponent },
  { path: 'professional-responsibilities', component: ProfessionalResponsibilitiesComponent },
  { path: 'collaboration-and-leadership', component: CollaborationAndLeadershipComponent },
  { path: 'racial-consciousness-and-reflection', component: RacialConsciousnessAndReflectionComponent },
  { path: 'school-and-work-experience', component: SchoolAndWorkExperienceComponent },
  { path: 'field-experience', component: FieldExperienceComponent},
  {path: 'sep', component: SepComponent},
  {path: 'literacy-log', component: LiteracyLogComponent},
  {path: 'theory-to-practice', component: TheoryToPracticeComponent},
  {path: 'syllabus', component: SyllabusComponent},
  {path: 'literacy-writing-assignment', component: LiteracyWritingAssignmentComponent},
  {path: 'theory-to-practice-lesson-plan', component: TheoryToPracticeLessonPlanComponent},
  {path: 'social-studies-lesson-plan', component: SocialStudiesLessonPlanComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
