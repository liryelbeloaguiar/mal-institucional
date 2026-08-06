import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DIFFERENTIALS } from '../../data/home-content';
import { IconCardComponent } from '../../../../shared/components/icon-card/icon-card.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-differentials',
  imports: [IconCardComponent, SectionHeaderComponent],
  templateUrl: './differentials.component.html',
  styleUrl: './differentials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DifferentialsComponent {
  protected readonly differentials = DIFFERENTIALS;
}
