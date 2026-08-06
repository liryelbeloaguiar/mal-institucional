import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../../../../layout/footer/footer.component';
import { HeaderComponent } from '../../../../layout/header/header.component';
import { AboutComponent } from '../../sections/about/about.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { DifferentialsComponent } from '../../sections/differentials/differentials.component';
import { FinalCtaComponent } from '../../sections/final-cta/final-cta.component';
import { HeroComponent } from '../../sections/hero/hero.component';
import { ProcessComponent } from '../../sections/process/process.component';
import { ServicesComponent } from '../../sections/services/services.component';
import { SolutionsComponent } from '../../sections/solutions/solutions.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SolutionsComponent,
    ServicesComponent,
    ProcessComponent,
    DifferentialsComponent,
    FinalCtaComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
