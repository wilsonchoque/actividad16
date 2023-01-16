import { UruguayComponent } from './pages/uruguay/uruguay.component';
import { ChileComponent } from './pages/chile/chile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeruComponent } from './pages/peru/peru.component';

const routes: Routes = [
  {path:'', component:PeruComponent},
  {path:'chile', component:ChileComponent},
  {path:'uruguay', component:UruguayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
