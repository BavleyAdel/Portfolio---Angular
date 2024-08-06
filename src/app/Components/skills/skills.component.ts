import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CardComponent, MatProgressBarModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: { name: string; percentage: number }[] = [
    { name: 'HTML', percentage: 100 },
    { name: 'css', percentage: 90 },
    { name: 'java script', percentage: 70 },
    { name: 'PHP', percentage: 30 },
    { name: 'c#', percentage: 60 },
  ];
}
