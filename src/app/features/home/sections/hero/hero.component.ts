import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideArrowDown } from '@lucide/angular';
import { AppButtonComponent } from '../../../../shared/components/app-button/app-button.component';

@Component({
  selector: 'app-hero',
  imports: [AppButtonComponent, LucideArrowDown],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
