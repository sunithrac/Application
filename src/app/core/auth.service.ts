import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

export const Users = [
    {
        "id": 1,
        "username": "brown",
        "email": "brown@example.com",
        "password": "Pass@123",
        "role": "admin"
    },
    {
        "id": 2,
        "username": "smith",
        "email": "smith@example.com",
        "password": "Pass@456",
        "role": "user"
    }
];

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private router: Router) { }

    private token: string | null = null;
    private tokenKey = 'auth_token';


    public login(email: string, password: string): boolean {
        const user = Users.find(u => u.email === email && u.password === password);
        if (user) {
            const token = this.generateFakeToken(user);
            localStorage.setItem(this.tokenKey, token);
            return true;
        }

        return false;
    }

    private generateFakeToken(user: any): string {
        const payload = {
            username: user.username,
            role: user.role,
            exp: Math.floor(Date.now() / 1000) + 60 * 60
        };
        return btoa(JSON.stringify(payload));
    }

    public isLoggedIn(): boolean {
        return localStorage.getItem(this.tokenKey) !== null;
    }

    public getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    public logout(): void {
        localStorage.removeItem(this.tokenKey);
        this.router.navigate(['/login']);
    }
}