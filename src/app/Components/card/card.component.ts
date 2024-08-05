import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  cards: { name: string; value: number }[] = [
    { name: 'Happy Clients', value: 232 },
    { name: 'Projects', value: 521 },
    { name: 'Hours Of Support', value: 1463 },
    { name: 'Hard Workers', value: 15 },
  ];
}
