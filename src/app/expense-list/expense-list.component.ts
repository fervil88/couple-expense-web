import { ExpenseService } from '../shared/expense/expense.service';

import { Component, OnInit } from '@angular/core';

import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
    expenses: Array<any>;

    isAuthenticated: boolean;

  constructor(private oktaAuth: OktaAuthService,
    private expenseService: ExpenseService) { }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
    this.expenseService.getAll().subscribe(data => {
      this.expenses = data;
    });
  }

}
