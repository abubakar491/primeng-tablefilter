import { Component } from '@angular/core';
import { MenuItem} from 'primeng/api';

@Component({
  selector: 'app-form-input-switch',
  templateUrl: './form-input-switch.component.html',
})
export class FormInputSwitchComponent { 
    checked1: boolean = false;

    checked2: boolean = true;
}

