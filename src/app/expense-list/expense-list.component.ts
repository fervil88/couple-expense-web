import { ExpenseService } from '../shared/expense/expense.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-expense-list',
    templateUrl: './expense-list.component.html',
    styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
    expenses: Array<any>;
    isAuthenticated: boolean;
    displayedColumns: string[] = ['title', 'quotaStart', 'quotaEnd', 'amount', 'individual', 'owner', 'creationDateTime', 'actions'];

    constructor(private router: Router,
        private expenseService: ExpenseService) { }

    async ngOnInit() {
        this.expenseService.getAll().subscribe(data => {
            this.expenses = data;
        });
    }

    gotoList() {
        this.router.navigateByUrl('/expense-list', {skipLocationChange: true}).then(() =>
        this.router.navigate(['ExpenseListComponent']));
    }

    delete(id: String, i: number) {
        this.expenseService.delete(id).subscribe(() => {
            this.expenses.splice(i, 1);
            this.expenses = JSON.parse(JSON.stringify(this.expenses))
        }, error => console.error(error));
    }

}
