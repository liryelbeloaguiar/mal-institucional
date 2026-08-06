import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideArrowUpRight, LucideAtSign, LucideLink } from '@lucide/angular';
import { CONTACT } from '../../core/constants/contact.constants';
import { BrandLogoComponent } from '../../shared/components/brand-logo/brand-logo.component';

@Component({
  selector: 'app-footer',
  imports: [BrandLogoComponent, LucideArrowUpRight, LucideAtSign, LucideLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly contact = CONTACT;
}
