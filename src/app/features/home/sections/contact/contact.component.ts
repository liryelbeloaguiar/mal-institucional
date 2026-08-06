import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideMail, LucideMessageCircle, LucideSend } from '@lucide/angular';
import { CONTACT } from '../../../../core/constants/contact.constants';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    LucideMail,
    LucideMessageCircle,
    LucideSend,
    SectionHeaderComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  protected readonly contact = CONTACT;
  protected readonly submitted = signal(false);
  protected readonly attempted = signal(false);
  protected readonly form;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      company: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submit(): void {
    this.submitted.set(false);
    this.attempted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted.set(true);
    this.attempted.set(false);
    this.form.reset();
  }
}
