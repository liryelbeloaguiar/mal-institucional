import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppButtonComponent } from '../../../../shared/components/app-button/app-button.component';

@Component({
  selector: 'app-final-cta',
  imports: [AppButtonComponent],
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinalCtaComponent {}
