import { Component } from '@angular/core';
import { PortfolioContentComponent } from "../portfolio-content/portfolio-content.component";

@Component({
  selector: 'app-philosophy',
  imports: [PortfolioContentComponent],
  templateUrl: './philosophy.component.html',
  styleUrl: './philosophy.component.scss'
})
export class PhilosophyComponent {
contentBlocks: string[] = [`
My perspective on education has been shaped by a diverse range of experiences across different
educational systems. Growing up in the Soviet Union’s rigid, memorization-focused
environment, I learned the importance of structure and discipline. However, I also became
acutely aware of the limitations of a system that left little room for creativity or personal
expression. Students were not encouraged to share their opinions or challenge teachers, and
independent thinking was often discouraged. This experience left me yearning for an educational
environment where students could express their ideas, emotions, and perspectives freely and
without fear.

As an educator today, I constantly reflect on how to create such an environment. How can I build
a classroom where students feel safe expressing themselves and where their voices are genuinely
heard? This question has become central to my teaching practice.

My educational journey at Eskişehir Osmangazi University in Turkey marked a transformative
turning point in my philosophy of teaching and learning. For the first time, I experienced a truly
student-centered educational system. Professors encouraged open dialogue, welcomed questions,
and treated students as partners in the learning process. Students were able to openly share ideas,
discuss different perspectives, and communicate freely with their instructors—an experience that
was unimaginable in my home country. One moment that left a lasting impression on me was the
opportunity to sit in the university cafeteria, drinking tea and engaging in informal conversations
with my professors. These simple yet meaningful interactions broke down hierarchical barriers
and reinforced the idea that learning extends beyond the classroom walls.

I was especially inspired by Prof. Dr. Nihan Hacıömeroğlu and Doç. Dr. Kader Reyhan, who
played a crucial role in shaping my confidence and academic identity. They often reminded us
that “learning begins when you dare to ask questions” and that “your voice matters as much as
the content you study.” Their encouragement helped me believe in my own ideas and see myself
not only as a student, but as a future educator. Observing how they modeled respect, empathy,
and critical thinking made me think for the first time, “One day, I want to be a professor too.”
Their passion and dedication continue to guide my teaching philosophy.

Later, while teaching in Turkey, I experienced firsthand the power of collaboration and teamwork
in the classroom. Students worked together to solve problems, exchange ideas, and learn from
one another, reinforcing my belief that learning becomes deeper and more meaningful when
students are active participants rather than passive recipients of information.

When I later arrived in the United States, I was introduced to student-centered instructional
methods such as small-group instruction and classroom centers. These approaches allowed for
individualized attention, differentiated instruction, and active engagement for learners with
diverse needs. My experiences in both Turkey and the United States helped me understand that
education should focus not only on academic achievement but also on the development of the
whole child—socially, emotionally, and intellectually.

Inclusion is another essential component of my teaching philosophy, particularly for students
with Individualized Education Plans (IEPs). In Crimea, children with special needs were often
excluded from mainstream education and marginalized within society. Witnessing this deeply
influenced my commitment to inclusive education. I strive to create a classroom where every
child, regardless of ability, feels valued, supported, and capable of success. All students deserve
access to the resources, encouragement, and understanding necessary to thrive.

My goal as an educator is to foster a learning environment that encourages curiosity, creativity,
and independent thinking while also providing the structure and support students need to
succeed. I want every student to feel safe expressing their thoughts and emotions, knowing they
are respected and heard. Ultimately, I hope my students leave my classroom with confidence in
their ability to communicate, think critically, and contribute meaningfully to society.

I would like to conclude my teaching philosophy with a quote by Ban Ki-moon:
“Education is a right, not a privilege, and it should be available to all children, regardless of
their background or circumstances.”
  `];
headerTitlePhrase: string|undefined;

}
