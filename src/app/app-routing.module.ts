import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { HomeComponent } from './home/home.component';
import { OktaCallbackComponent, OktaAuthModule } from '@okta/okta-angular';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';
import { ExpenseAddComponent } from './expense-add/expense-add.component';

const config = {
    issuer: 'https://dev-632265.oktapreview.com/oauth2/default',
    redirectUri: 'http://localhost:4200/implicit/callback',
    clientId: '0oainpxktvBBOgpk90h7'
};

const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'expense-details/:id', component: ExpenseDetailsComponent },
    { path: 'expense-list', component: ExpenseListComponent },
    { path: 'expense-edit/:id', component: ExpenseEditComponent },
    { path: 'implicit/callback', component: OktaCallbackComponent },
    { path: 'expense-add', component: ExpenseAddComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true , onSameUrlNavigation: 'reload'}),
        OktaAuthModule.initAuth(config)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
