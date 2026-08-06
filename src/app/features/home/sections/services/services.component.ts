import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SERVICES } from '../../data/home-content';
import { IconCardComponent } from '../../../../shared/components/icon-card/icon-card.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-services',
  imports: [IconCardComponent, SectionHeaderComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  protected readonly services = SERVICES;
}
