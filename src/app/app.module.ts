import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { StoryangulartableComponent } from './storyangulartable/storyangulartable.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips'
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServerTransferStateModule } from '@angular/platform-server';
import { DashboardComponent } from './dashboard/dashboard.component';
const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};
@NgModule({
  declarations: [
    AppComponent,
    StoryangulartableComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'app-root'}),
    ServerTransferStateModule,
    MatProgressSpinnerModule
  ],
  providers: [
    // {
    //   provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    //   useValue: appearance
    // },
    provideHttpClient(withFetch())
    // ... other providers like services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
