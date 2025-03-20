import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { products } from '../shared/interface/product';

@Injectable({
    providedIn: 'root'
})

export class HomeService {
    private jsonURL = 'assets/json/product.json';
    constructor( public http: HttpClient ) {
    }

    public getProductList(): Observable<any>  {
        return this.http.get<products>(this.jsonURL);
    }
}