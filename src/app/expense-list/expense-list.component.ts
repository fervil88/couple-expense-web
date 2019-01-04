import { ExpenseService } from '../shared/expense/expense.service';
import { Router } from '@angular/router';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ExpenseModule } from '../shared/expense/expense.module';

@Component({
    selector: 'app-expense-list',
    templateUrl: './expense-list.component.html',
    styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit, AfterViewInit  {

    dataSource: MatTableDataSource<ExpenseModule>;
    isAuthenticated: boolean;
    displayedColumns: string[] = ['title', 'quotaStart', 'quotaEnd', 'amount', 'individual', 'owner', 'creationDateTime', 'actions'];
    @ViewChild(MatPaginator) paginator: MatPaginator;


    constructor(private router: Router,
        private expenseService: ExpenseService) {
            const expenses: ExpenseModule[] = [];
            this.dataSource = new MatTableDataSource(expenses);
         }

    async ngOnInit() {
        this.expenseService.getAll().subscribe(data => {
            this.dataSource = data;
        });
    }

    ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

    gotoList() {
        this.router.navigateByUrl('/expense-list', {skipLocationChange: true}).then(() =>
        this.router.navigate(['ExpenseListComponent']));
    }

    delete(id: String, i: number) {
        this.expenseService.delete(id).subscribe(() => {
            this.dataSource.data.splice(i, 1);
            this.dataSource = JSON.parse(JSON.stringify(this.dataSource));
        }, error => console.error(error));
    }

}
