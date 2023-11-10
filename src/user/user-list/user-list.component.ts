import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { User } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users$: Observable<User[]> = of([]);
  private criteriaSubject = new BehaviorSubject<string>('')
  criteria$ = this.criteriaSubject;

  constructor(private userService: UserService, private messageService: MessageService) {}

  ngOnInit() {
    this.users$ = combineLatest([
      this.userService.getList(),
      this.criteria$,
    ]).pipe(
      map(([users, criteria]) =>
        users.filter((user) =>
          user.name.toLowerCase().includes(criteria.toLowerCase())
        )
      )
    );
  }

  onCriteriaChange(criteria: string) {
    this.criteriaSubject.next(criteria)
  }

  // get filteredUsers(): User[] {
  //   return this.userList.filter((userList) => userList.name.toLowerCase().includes(this.criteria.toLowerCase()))
  // }



}