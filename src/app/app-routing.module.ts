import { StudentsListComponent } from './components/pages/students/students-list/students-list.component';
import { CharacterListComponent } from './components/pages/characters/character-list/character-list.component';
import { CharacterComponent } from './components/pages/characters/character/character.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsComponent } from './components/pages/requests/requests.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
  {
    path: 'characters/:isCharacter',
    component: CharacterListComponent,
  },
  {
    path: 'teachers',
    redirectTo: 'characters/false',
    pathMatch: 'full'
  },
  {
    path: 'students',
    component: StudentsListComponent
  },
  {
    path: 'requests',
    component: RequestsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: 'characters/true',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: 'characters/true',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
