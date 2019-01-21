import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExempleComponent } from './components/exemple/exemple.component';

const routes: Routes = [{ path: 'exemple', component: ExempleComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
