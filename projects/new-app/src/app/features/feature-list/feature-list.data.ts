import { environment as env } from '../../../environments/environment';

export interface Feature {
  name: string;
  version?: string;
  description: string;
  github?: string;
  documentation: string;
  medium?: string;
}

export const features: Feature[] = [
  {
    name: 'Document Management',
    version: env.versions.angular,
    description: 'anms.features.angular',
    github: 'https://github.com/angular/angular',
    documentation: 'https://angular.io/docs/ts/latest/'
  },
  {
    name: 'RSE',
    version: env.versions.material,
    description: 'anms.features.angular-material',
    github: 'https://github.com/angular/material2/',
    documentation: 'https://material.angular.io/'
  },
  {
    name: 'Business Management',
    version: env.versions.angularCli,
    description: 'anms.features.angular-cli',
    github: 'https://github.com/angular/angular-cli',
    documentation: 'https://cli.angular.io/'
  }
];
