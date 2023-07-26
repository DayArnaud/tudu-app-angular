import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiCalendarModule } from "@taiga-ui/core";
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from "@angular/material/select";
import { MatChipsModule } from '@angular/material/chips';
import { TuiInputModule } from "@taiga-ui/kit";
import { FormsModule } from "@angular/forms";
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';

import { PrivateFooterComponent } from './components/private-footer/private-footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { PlannerComponent } from './components/planner/planner.component';
import { TaskFieldComponent } from './components/task-field/task-field.component';
import { SubtaskActionComponent } from './components/subtask-action/subtask-action.component';

registerLocaleData(pt);

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
        SubtaskActionComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiCalendarModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatChipsModule,
        TuiInputModule
    ],
    providers: [
        { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
        { provide: LOCALE_ID, useValue: 'pt' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
