import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonsciComponent } from './pages/nonsci/nonsci.component';

const routes: Routes = [
  { path:'', redirectTo:'nonsci-component', pathMatch: 'full' },
  { path: 'nonsci-component', component: NonsciComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
