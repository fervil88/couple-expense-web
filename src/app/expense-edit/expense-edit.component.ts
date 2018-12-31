import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../shared/expense/expense.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
    selector: 'app-expense-edit',
    templateUrl: './expense-edit.component.html',
    styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {

    expense: any;

    expenseSubscription: Subscription;

    constructor(private route: ActivatedRoute,
        private router: Router,
        public expenseService: ExpenseService) {
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.expenseSubscription = this.route.params.subscribe(params => {
            if (id) {
                this.expenseService.get(id).subscribe((expense: any) => {
                    if (expense) {
                        this.expense = expense;
                    }
                });
            }
        });
    }

    save(form: NgForm) {
        this.expenseService.save(form).subscribe(() => {
            this.gotoList();
        }, error => console.error(error));
    }

    gotoList() {
        this.router.navigate(['/expense-list']);
    }

    delete(id: String) {
       this.expenseService.delete(id).subscribe(() => {
      this.gotoList();
    }, error => console.error(error));
    }
}
