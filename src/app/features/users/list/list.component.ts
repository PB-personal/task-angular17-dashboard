import { Component } from '@angular/core';

import { User, UserService } from '../../../core/services/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  constructor(private userService: UserService) {}

  users: User[] = [];
  loading = true;

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.loading = false;
    });
  }
}
