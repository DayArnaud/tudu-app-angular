import { PlannerComponent } from './components/planner/planner.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'main-page', component: MainPageComponent },
    { path: 'create-task', component: CreateTaskComponent },
    { path: 'view-task/:task_id', component: ViewTaskComponent },
    { path: 'planner', component: PlannerComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
