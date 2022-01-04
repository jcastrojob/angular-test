import { Comment } from './../../models/comment';
import { CommentService } from './../../services/comment.service';
import { User } from 'src/app/models/user';
import { Post } from 'src/app/models/post';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit {
  post!: Post;
  user!: User;
  comments: Comment[] = [];

  constructor(
    private postService: PostService,
    private userService: UserService,
    private route: ActivatedRoute,
    private commentService: CommentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const postId = paramMap.get('id');

      if (postId) {
        this.loadInfo(postId);
      }
    });
  }

  loadInfo(postId: string) {
    this.postService.getById(postId).subscribe(post => {
      this.post = post;

      this.userService.getById(post.userId).subscribe(user => {
        this.user = user;
      });

      this.commentService.get(post.id).subscribe(comments => {
        this.comments = comments;
      })
    });
  }

}
