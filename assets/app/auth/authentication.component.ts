import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-auth',
    templateUrl: './authentication.component.html'
})
export class AuthenticationComponent {
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}