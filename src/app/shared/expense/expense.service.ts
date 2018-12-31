import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
})
export class ExpenseService {
    constructor(private http: HttpClient) { }

    private userUrl = 'http://localhost:8181';

    public getAll(): Observable<any> {
        return this.http.get(this.userUrl + '/expenses');
    }

    public get(id: String): Observable<any> {
        return this.http.get(this.userUrl + '/expense/' + id);
    }

    public save(expense) {
        return this.http.post(this.userUrl + '/expense/edit', expense);
    }

    public create(expense) {
        const createExpenseRequest = {token: '', expense: expense};
        return this.http.post(this.userUrl + '/expense', createExpenseRequest);
    }

    public delete(id: String): Observable<any> {
        return this.http.delete(this.userUrl + '/expense/delete/' + id);
    }
}
