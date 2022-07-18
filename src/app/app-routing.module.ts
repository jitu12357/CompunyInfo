import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedProjectComponent } from './component/assigned-project/assigned-project.component';
import { DesboardComponent } from './component/desboard/desboard.component';
import { EmployInfoComponent } from './component/employ-info/employ-info.component';
import { ProjectInfoComponent } from './component/project-info/project-info.component';

const routes: Routes = [
  {
    path:'',
    component: DesboardComponent,
    pathMatch:'full'
  },

  {
    path:'employ',
    component: EmployInfoComponent,
    pathMatch:'full'
  },

  {
    path:'project',
    component: ProjectInfoComponent,
    pathMatch:'full'
  },

  {
    path:'mapping',
    component: AssignedProjectComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
