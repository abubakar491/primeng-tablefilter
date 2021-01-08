import { Component } from '@angular/core';

@Component({
  selector: 'app-form-radio-button',
  templateUrl: './form-radio-button.component.html',
})
export class FormRadioButtonComponent { 
    city: string;

    selectedCategory: any = null;

    categories: any[] = [{name: 'Accounting', key: 'A'}, {name: 'Marketing', key: 'M'}, {name: 'Production', key: 'P'}, {name: 'Research', key: 'R'}];

    ngOnInit() {
        this.selectedCategory = this.categories[1];
    }
}

