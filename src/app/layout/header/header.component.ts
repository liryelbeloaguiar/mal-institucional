import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { LucideMenu, LucideX } from '@lucide/angular';
import { BrandLogoComponent } from '../../shared/components/brand-logo/brand-logo.component';

@Component({
  selector: 'app-header',
  imports: [BrandLogoComponent, LucideMenu, LucideX],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly isScrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly links = [
    { label: 'Início', href: '#inicio' },
    { label: 'A empresa', href: '#empresa' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Contato', href: '#contato' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 30);
  }

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
