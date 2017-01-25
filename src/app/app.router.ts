import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ProjectDetailComponent} from './project-detail/project-detail.component';

const appRoutes = [
{
  path: '',
  component: FrontpageComponent
},
{
  path: "projects/:key",
  component: ProjectDetailComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
