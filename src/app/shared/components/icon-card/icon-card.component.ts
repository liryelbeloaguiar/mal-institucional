import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideDynamicIcon, LucideIconData } from '@lucide/angular';

@Component({
  selector: 'app-icon-card',
  imports: [LucideDynamicIcon],
  templateUrl: './icon-card.component.html',
  styleUrl: './icon-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCardComponent {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly icon = input.required<LucideIconData>();
  readonly index = input<string>();
}
