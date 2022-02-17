import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { StudentDataComponent } from './components/student-data/student-data.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'product/:id',
    component: ProductViewComponent
  },
  {
    path: "student",
    component: StudentComponent
  },
  {
    path: "/studentData",
    component: StudentDataComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
