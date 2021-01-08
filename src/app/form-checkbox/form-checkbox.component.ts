import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
})
export class FormCheckboxComponent implements OnInit { 
    selectedCities: string[] = [];

    selectedCategories: any[] = ['Technology', 'Sports'];

    categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];

    checked: boolean = false;

    ngOnInit() {
        this.selectedCategories = this.categories.slice(1,3);
    }
}

