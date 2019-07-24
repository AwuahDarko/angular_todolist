import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './components/todo/todo.component';
import {AbiutComponent} from './components/pages/abiut/abiut.component';


const routes: Routes = [
  {path:"", component: TodoComponent},
  {path:"about",component:AbiutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
