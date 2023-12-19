import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryangulartableComponent } from './storyangulartable/storyangulartable.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{path:"",component:StoryangulartableComponent},
{path:"Dashboard",component:DashboardComponent},
{path:"HackerStoryList",component:StoryangulartableComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
