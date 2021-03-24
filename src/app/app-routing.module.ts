import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { HistoryComponent} from './history/history.component';

const routes: Routes = [
  {
    path:'',
    component:NoteComponent
  },
  {
    path:'history',
    component:HistoryComponent
  },
  // {
  //   path:'/:vaule',
  //   component:NoteComponent
  // } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
