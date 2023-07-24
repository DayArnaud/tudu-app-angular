import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TuduService, Iuser } from 'src/app/services/tudu.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    userForm!: FormGroup;

    constructor(private tuduService: TuduService, private router: Router) { }

    ngOnInit(): void {
        this.userForm = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required),
            confirmPassword: new FormControl('', Validators.required)
        });
    }

    submit(): void {

        if (this.userForm.valid) {
            const password = this.userForm.get('password')?.value;
            const passwordConfirmation = this.userForm.get('confirmPassword')?.value;

            if (password !== passwordConfirmation) {
                console.log("Senhas invalidas");
                return;
            }
            const user: Iuser = {
                name: this.userForm.get('name')?.value,
                email: this.userForm.get('email')?.value,
                password: this.userForm.get('password')?.value,
            };
            this.createUser(user);
        }
    }
    createUser(user: Iuser): void {
        this.tuduService.createUser(user).subscribe(() => {
            this.router.navigateByUrl('/sign-in');
        });
    }

}
