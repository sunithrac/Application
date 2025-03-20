import { Injectable } from "@angular/core";

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
    constructor() { }

    private token: string | null = null;

    public login(username: string, password: string): boolean {
        const user = Users.find(u => u.username === username && u.password === password);

        if (user) {
            const token = this.generateFakeToken(user);
            localStorage.setItem('token', token);
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
}