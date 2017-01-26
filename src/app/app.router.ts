import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ProjectDetailComponent} from  './project-detail/project-detail.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes = [
{
  path: '',
  component: FrontpageComponent
},
{
  path: "projects/:key",
  component: ProjectDetailComponent
},
{
  path: "add",
  component: AddProjectComponent
},
{
  path: "admin",
  component: AdminComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
