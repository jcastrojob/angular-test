import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostsListFilterComponent } from './components/posts-list-filter/posts-list-filter.component';
import { FilterUserOrTextPipe } from './pipes/filter-user-or-text.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsEditComponent } from './pages/posts-edit/posts-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PostsDetailComponent } from './pages/posts-detail/posts-detail.component';
import { UserAddressPipe } from './pipes/user-address.pipe';
import { UserCompanyPipe } from './pipes/user-company.pipe';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { PostUserComponent } from './components/post-user/post-user.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostsListFilterComponent,
    FilterUserOrTextPipe,
    PostsEditComponent,
    PostsDetailComponent,
    UserAddressPipe,
    UserCompanyPipe,
    PostCommentsComponent,
    PostUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
