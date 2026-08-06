import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideArrowUpRight, LucideDynamicIcon } from '@lucide/angular';
import { SOLUTIONS } from '../../data/home-content';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-solutions',
  imports: [SectionHeaderComponent, LucideDynamicIcon, LucideArrowUpRight],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SolutionsComponent {
  protected readonly solutions = SOLUTIONS;
}
