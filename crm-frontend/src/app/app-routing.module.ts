import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtapaComponent } from './feature/etapa/etapa.component';

const routes: Routes = [
  {path: 'etapa', component:EtapaComponent},
  {path: 'etapa/:id', component:EtapaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
