import { NotificationService } from './../../services/notification.service';
import { UserService } from './../../services/user.service';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.css']
})
export class PostsEditComponent implements OnInit {
  public formEditPost: FormGroup;
  isNewPost: boolean = true;
  isLoading: boolean = false;
  public users: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.formEditPost = this.formBuilder.group({ title: ['', [Validators.required]], body: ['', [Validators.required]], id: [null], userId: ['', [Validators.required]] })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const postId = paramMap.get('id');
      
      if (postId) {
        this.isNewPost = false
        this.getPost(postId);
      }
    });

    this.userService.get().subscribe(response => this.users = response);
  }

  getPost(postId: string) {
    this.postService.getById(postId).subscribe(post => {
      this.formEditPost.patchValue(post);
    });
  }

  save() {
    this.isLoading = true;
    if (this.isNewPost) {
      this.postService.create(this.formEditPost.value).subscribe(response => {
        this.notificationService.showSuccess('is crated success', 'post');
        this.router.navigate(['/']);
      })
    } else {
      this.postService.update(this.formEditPost.value).subscribe(response => {
        this.notificationService.showSuccess('is updated succes', 'post');
        this.router.navigate(['/']);
      })
    }
  }
}
