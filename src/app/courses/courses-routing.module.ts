import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CousesComponent } from './couses/couses.component';

const routes: Routes = [
  {path: '', component: CousesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
