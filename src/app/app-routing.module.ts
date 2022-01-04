import { PostsDetailComponent } from './pages/posts-detail/posts-detail.component';
import { PostsEditComponent } from './pages/posts-edit/posts-edit.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: PostsListComponent },
  { path: "posts/:id", component: PostsEditComponent },
  { path: "posts-new", component: PostsEditComponent },
  { path: "detail/:id", component: PostsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
