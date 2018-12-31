import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpenseService } from '../shared/expense/expense.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css']
})
export class ExpenseDetailsComponent implements OnInit {

  expense: any;

  expenseSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              public expenseService: ExpenseService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.expenseSubscription = this.expenseService.get(id).subscribe((data: {}) => this.expense = data);
  }
}