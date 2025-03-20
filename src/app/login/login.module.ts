import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { RouterModule, Routes } from "@angular/router";
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
]

@NgModule({
    declarations: [ LoginComponent ],
    imports: [ RouterModule.forChild(routes), FormsModule, ReactiveFormsModule, MatInputModule ]
})

export class LoginModule {
    
}