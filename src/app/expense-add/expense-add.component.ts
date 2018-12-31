import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../shared/expense/expense.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
import { ExpenseModule } from '../shared/expense/expense.module';

@Component({
    selector: 'app-expense-add',
    templateUrl: './expense-add.component.html',
    styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent {

    expense: ExpenseModule = new ExpenseModule();
    expenseSubscription: Subscription;

    constructor(private router: Router,
        public expenseService: ExpenseService) {

         }

    create(form: NgForm) {
        console.log(form);
        console.log(this.expense);
        this.expenseService.create(this.expense).subscribe(() => {
            this.gotoList();
        }, error => console.error(error));
    }

    gotoList() {
        this.router.navigate(['/expense-list']);
    }

}
