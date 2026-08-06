import { LucideIconData } from '@lucide/angular';

export interface Solution {
  readonly name: string;
  readonly headline: string;
  readonly description: string;
  readonly status: string;
  readonly code: string;
  readonly icon: LucideIconData;
}

export interface ContentCard {
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIconData;
}

export interface ProcessStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}
