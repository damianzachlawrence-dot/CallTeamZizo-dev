import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  readonly services = [
    { icon: '⌘', number: '01', title: 'Basic website builds', description: 'A clear, mobile-friendly website that introduces your business and makes it easy for customers to get in touch.' },
    { icon: '✳', number: '02', title: 'Chatbots that help', description: 'Give visitors useful answers in the moment and turn more conversations into qualified leads.' },
    { icon: '◉', number: '03', title: 'AI receptionist', description: 'A helpful, always-on first point of contact that can answer calls and capture new opportunities.' }
  ];

  readonly plans = [
    { name: 'Basic website', price: '120', description: 'A polished online home for your business.', features: ['Basic website build', 'Mobile-friendly design', 'Clear calls to action', 'Ongoing website support'], popular: false },
    { name: 'Website + chatbot', price: '200', description: 'Turn more site visits into real conversations.', features: ['Basic website build', 'Chatbot integration', 'Lead capture flows', 'Conversation handoff'], popular: true },
    { name: 'AI receptionist', price: '400', description: 'A complete digital front desk for your business.', features: ['Basic website build', 'Chatbot integration', 'Full-time AI receptionist', 'Lead capture and routing'], popular: false }
  ];
}
