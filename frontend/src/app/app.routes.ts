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
import { TheoryToPracticeLessonPlan2Component } from './theory-to-practice-lesson-plan-2/theory-to-practice-lesson-plan-2.component';
import { ScienceLessonPlanComponent } from './science-lesson-plan/science-lesson-plan.component';
import { ConceptAttainmentPresentationComponent } from './concept-attainment-presentation/concept-attainment-presentation.component';
import { MicroTeachingReflectionComponent } from './micro-teaching-reflection/micro-teaching-reflection.component';
import { GiftedTalentedResearchProjectComponent } from './gifted-talented-research-project/gifted-talented-research-project.component';
import { ExceptionalityChapterSummaryComponent } from './exceptionality-chapter-summary/exceptionality-chapter-summary.component';
import { CooperatingTeacherEvaluationComponent } from './cooperating-teacher-evaluation/cooperating-teacher-evaluation.component';
import { TeachingIndigenousHistoryPresentationComponent } from './teaching-indigenous-history-presentation/teaching-indigenous-history-presentation.component';

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
  {path: 'social-studies-lesson-plan', component: SocialStudiesLessonPlanComponent},
  {path: 'theory-to-practice-lesson-plan-2', component: TheoryToPracticeLessonPlan2Component},
  {path: 'science-lesson-plan', component: ScienceLessonPlanComponent},
  {path: 'concept-attainment-presentation', component: ConceptAttainmentPresentationComponent},
  {path: 'social-studies-lesson-plan', component: SocialStudiesLessonPlanComponent},
  {path: 'micro-teaching-reflection', component: MicroTeachingReflectionComponent},
  {path: 'gifted-talented-research-project', component: GiftedTalentedResearchProjectComponent},
  {path: 'exceptionality-chapter-summary', component: ExceptionalityChapterSummaryComponent},
  {path: 'cooperating-teacher-evaluation', component: CooperatingTeacherEvaluationComponent},
  {path: 'teaching-indigenous-history-presentation', component: TeachingIndigenousHistoryPresentationComponent},
  {path: 'racial-consciousness', component: RacialConsciousnessAndReflectionComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
