import {Component, OnInit} from '@angular/core';
import { ProductService } from './../productservice.service';
import { Product } from './../product';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-data-pick-list',
  templateUrl: './data-pick-list.component.html',
  styleUrls: ['./data-pick-list.component.scss']
})
export class DataPickListComponent implements OnInit { 
    sourceProducts: Product[];
    
    targetProducts: Product[];
    
    constructor(private carService: ProductService, private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.carService.getProductsSmall().then(products => this.sourceProducts = products);
        this.targetProducts = [];
        this.primengConfig.ripple = true;
    }
}

