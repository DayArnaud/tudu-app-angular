import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-private-footer',
    templateUrl: './private-footer.component.html',
    styleUrls: ['./private-footer.component.css']
})
export class PrivateFooterComponent {
    constructor(private router: Router) { }

    goBackTo() {
        this.router.navigate(['/main-page']);
    }
    goTo() {
        this.router.navigate(['/planner']);
    }

}
