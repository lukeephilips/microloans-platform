import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component'

const appRoutes = [
{
  path: '',
  component: FrontpageComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
