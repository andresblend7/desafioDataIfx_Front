import { DataProviderService } from './shared/services/data-provider.service';
import {  HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/components/header/header.component';
import { CharacterComponent } from './components/pages/characters/character/character.component';
import { CharacterListComponent } from './components/pages/characters/character-list/character-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherListComponent } from './components/pages/teachers/teacher-list/teacher-list.component';
import { TableComponent } from './shared/components/table/table.component';
import { StudentsListComponent } from './components/pages/students/students-list/students-list.component';
import { RequestsComponent } from './components/pages/requests/requests.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterComponent,
    CharacterListComponent,
    TeacherListComponent,
    TableComponent,
    StudentsListComponent,
    RequestsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
