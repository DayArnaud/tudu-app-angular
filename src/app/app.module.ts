import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiCalendarModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HttpClientModule } from '@angular/common/http';

import { PrivateFooterComponent } from './components/private-footer/private-footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { PlannerComponent } from './components/planner/planner.component';
import { TaskFieldComponent } from './components/task-field/task-field.component';
import { TaskProgressCardComponent } from './components/task-progress-card/task-progress-card.component';
import { TaskActionButtonComponent } from './components/task-action-button/task-action-button.component';

@NgModule({
    declarations: [
        AppComponent,
        PrivateFooterComponent,
        WelcomeComponent,
        SignInComponent,
        SignUpComponent,
        MainPageComponent,
        CreateTaskComponent,
        ViewTaskComponent,
        PlannerComponent,
        TaskFieldComponent,
        TaskProgressCardComponent,
        TaskActionButtonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiCalendarModule,
        HttpClientModule
    ],
    providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
    bootstrap: [AppComponent]
})
export class AppModule { }
