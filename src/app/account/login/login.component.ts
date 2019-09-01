import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    constructor(private router: Router) {

    }

    navigateToAdmin() {
        this.router.navigate(['/admin/about']);
    }

}
