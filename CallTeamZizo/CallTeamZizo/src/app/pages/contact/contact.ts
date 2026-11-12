import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BUSINESS_DETAILS } from '../../shared/business-details';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  showDemoPopup = false;
  readonly business = BUSINESS_DETAILS;
  readonly contactForm: FormGroup;
  readonly generalEmailHref = this.createMailto(
    'Call Team Zizo enquiry',
    'Hello Call Team Zizo,\n\nI would like to learn more about your services.\n\n'
  );

  constructor(private readonly formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      service: ['Basic website'],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.showDemoPopup = true;
    this.composeEmail();
  }

  composeEmail(): void {
    const values = this.contactForm.getRawValue();
    const subject = `Call Team Zizo enquiry: ${values.service || 'General enquiry'}`;
    const body = [
      'Hello Call Team Zizo,',
      '',
      `My name is ${values['name']}.`,
      `My email address is ${values['email']}.`,
      `I'm interested in: ${values['service']}.`,
      '',
      'Message:',
      values['message'],
      '',
      'Sent from the Call Team Zizo website demo.'
    ].join('\n');

    const emailLink = document.createElement('a');
    emailLink.href = this.createMailto(subject, body);
    emailLink.style.display = 'none';
    document.body.appendChild(emailLink);
    emailLink.click();
    emailLink.remove();
  }

  closeDemoPopup(): void {
    this.showDemoPopup = false;
  }

  private createMailto(subject: string, body: string): string {
    return `mailto:${this.business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
