import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillainListComponent } from './villain-list/villain-list.component';
import { PowersComponent } from './powers/powers.component';

const appRoutes: Routes = [
    {
  path: '',
  redirectTo: 'villains',
  pathMatch: 'full'
},
  {
    path: 'villains',
    component: VillainListComponent
  },
  {
    path: 'powers',
    component: PowersComponent
  },
  {
    path: '**',
    component: VillainListComponent
  }
];

export const routing: ModuleWithProviders = 
RouterModule.forRoot(appRoutes);