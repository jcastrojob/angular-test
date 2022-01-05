import { FilterStatusService } from './../../services/filter-status.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-posts-list-filter',
  templateUrl: './posts-list-filter.component.html',
  styleUrls: ['./posts-list-filter.component.css']
})
export class PostsListFilterComponent implements OnInit {
  public users: User[] = [];
  formFilter = new FormGroup({
    textfilter: new FormControl(''),
    userId: new FormControl(''),
  });

  constructor(private userService: UserService, private filterStatus: FilterStatusService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userService.get().subscribe(response => this.users = response);
    this.formFilter = this.formBuilder.group({ textFilter: [''], userId: [''] })
  }

  changeFilter() {
    this.filterStatus.triggerFilterStatus.emit({ textFilter: this.formFilter.value.textFilter, userId: this.formFilter.value.userId })
  }

  resetFilter() {
    this.formFilter.reset();
    this.changeFilter()
  }

}
