import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-form-input-group',
  templateUrl: './form-input-group.component.html',
})
export class FormInputGroupComponent implements OnInit { 
    ngOnInit() {
      this.primengConfig.ripple = true;
    }

    constructor(private primengConfig: PrimeNGConfig) {}
}

