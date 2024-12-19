import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateAccountComponent } from './component/pages/create-account/create-account.component';

export const routes: Routes = [
    { path:'',component: CreateAccountComponent},
    { path:'home/',component: HomeComponent }
];
