import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { ABOUT_HIGHLIGHTS } from '../../data/home-content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-about',
  imports: [SectionHeaderComponent, LucideDynamicIcon],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly highlights = ABOUT_HIGHLIGHTS;
}
