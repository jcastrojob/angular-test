import { Post } from '../../models/post';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { FilterStatusService } from 'src/app/services/filter-status.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  public posts: Post[] = [];
  public userId: number | any = null;
  public textFilter: string | any = null;

  constructor(private postservice: PostService, private filterStatus: FilterStatusService) { }

  ngOnInit(): void {
    this.postservice.get().subscribe(response => {
      this.posts = response;
    });

    this.filterStatus.triggerFilterStatus.subscribe(filter => {
      this.userId = filter?.userId;
      this.textFilter = filter?.textFilter;
    })
  }
}
