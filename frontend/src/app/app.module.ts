import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { ExempleComponent } from './components/exemple/exemple.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';

import { MaterialModule } from './shared/material.module';
import { IssueService } from './services/issue.service';

@NgModule({
  declarations: [
    AppComponent,
    ExempleComponent,
    ListComponent,
    EditComponent,
    CreateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  exports: [MaterialModule],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule {}
