import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ExpenseService } from './shared/expense/expense.service';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderInterceptor } from './shared/interceptor/header.interceptor';
import { ExpenseAddComponent } from './expense-add/expense-add.component';

@NgModule({
    declarations: [
        AppComponent,
        ExpenseListComponent,
        ExpenseDetailsComponent,
        ExpenseEditComponent,
        HomeComponent,
        ExpenseAddComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
        FormsModule
    ],
    providers: [ExpenseService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HeaderInterceptor,
            multi: true,
        }],
    bootstrap: [AppComponent]
})
export class AppModule { }
