import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideArrowRight } from '@lucide/angular';

@Component({
  selector: 'app-button',
  imports: [LucideArrowRight],
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppButtonComponent {
  readonly label = input.required<string>();
  readonly href = input.required<string>();
  readonly variant = input<'primary' | 'secondary' | 'light'>('primary');
  readonly external = input(false);
}
