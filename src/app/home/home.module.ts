import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { HomeComponent } from "./home.component";
import { HomeService } from "./home.service";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: "full",
      //  canActivate: [AuthGuard]
    }
]

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [ RouterModule.forChild(routes), MatCardModule, CommonModule ],
    exports: [ RouterModule ],
    providers: [ HomeService ]
})

export class HomeModule {
}

