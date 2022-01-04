import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListFilterComponent } from './posts-list-filter.component';

describe('PostsListFilterComponent', () => {
  let component: PostsListFilterComponent;
  let fixture: ComponentFixture<PostsListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsListFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
