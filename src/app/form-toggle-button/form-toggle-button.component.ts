import { Component } from '@angular/core';
import { SelectItem, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-form-toggle-button',
  templateUrl: './form-toggle-button.component.html',
})
export class FormToggleButtonComponent { 

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
      this.primengConfig.ripple = true;
    }
    
    checked1: boolean = false;

    checked2: boolean = true;
}

