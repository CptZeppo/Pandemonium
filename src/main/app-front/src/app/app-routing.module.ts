import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JitsiComponent} from "./jitsi/jitsi.component";
import {AcceuilComponent} from "./acceuil/acceuil.component";
import {EditorComponent} from "./editor/editor.component";


const routes: Routes = [ {
  path: '',
  component: AcceuilComponent,
},
  {
    path: 'jitsi',
    component: JitsiComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
