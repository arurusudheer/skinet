import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: IProduct[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http.get('https://localhost:7202/api/products?sort=priceAsc&search=blue')
    //   .subscribe((response: any) =>{
    //   this.products = response.data;
    // }, error => {
    //   console.log(error);
    // });
    this.http.get('https://localhost:7202/api/products?sort=priceAsc&search=blue')
      .subscribe({
        next: (response: IPagination) => this.products = response.data,
        error: (e) => console.error(e),
        complete: () => console.log('complete')
      });
  }  
}
