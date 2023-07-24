import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ilogin, TuduService } from 'src/app/services/tudu.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    loginForm!: FormGroup;

    constructor(private tuduService: TuduService, private router: Router) { }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
        });
    }

    login(): void {
        if (this.loginForm.valid) {
            const user: Ilogin = {
                email: this.loginForm.get('email')?.value,
                password: this.loginForm.get('password')?.value,
            }
            this.signInUser(user);
        }
    }

    signInUser(user: Ilogin): void {
        this.tuduService.userLogin(user).subscribe((response) => {
            localStorage.setItem('user_id', response['_id']['$oid']);
            localStorage.setItem('name', response.name);
            this.router.navigateByUrl('/main-page');
        });
    }
}
