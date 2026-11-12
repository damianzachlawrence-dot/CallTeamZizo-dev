import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  readonly values = [
    { number: '01', title: 'Make it useful', description: 'Every feature should make it easier for a customer to find you, understand you, or get in touch.' },
    { number: '02', title: 'Keep it human', description: 'Technology should support real relationships, not get in the way of them.' },
    { number: '03', title: 'Build for the next step', description: 'We create a clear path from a first impression to a meaningful conversation.' }
  ];
}
