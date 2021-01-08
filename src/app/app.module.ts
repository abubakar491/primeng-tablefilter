import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import { CustomerService } from './customerservice';
import { DataTablesComponent } from './table-filter/data-tables.component'

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {PickListModule} from 'primeng/picklist';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputNumberModule} from 'primeng/inputnumber';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ToggleButtonModule} from 'primeng/togglebutton';



import { TableRowExpandComponent } from './table-row-expand/table-row-expand.component';

import { ProductService } from './productservice.service';
import { TableEditComponent } from './table-edit/table-edit.component';
import { DataPickListComponent } from './data-pick-list/data-pick-list.component';
import { FormAutoCompleteComponent } from './form-auto-complete/form-auto-complete.component';
import { FormCalendarComponent } from './form-calendar/form-calendar.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormDropdownComponent } from './form-dropdown/form-dropdown.component';
import { FormInputGroupComponent } from './form-input-group/form-input-group.component';
import { FormInputMaskComponent } from './form-input-mask/form-input-mask.component';
import { FormInputTextComponent } from './form-input-text/form-input-text.component';
import { FormInputSwitchComponent } from './form-input-switch/form-input-switch.component';
import { FormInputNumberComponent } from './form-input-number/form-input-number.component';
import { FormMultiSelectComponent } from './form-multi-select/form-multi-select.component';
import { FormRadioButtonComponent } from './form-radio-button/form-radio-button.component';
import { FormToggleButtonComponent } from './form-toggle-button/form-toggle-button.component';
import { FormPasswordComponent } from './form-password/form-password.component'

const routes: Routes = [
  { path: 'data-tables', component: DataTablesComponent },
  { path: 'row-expand', component: TableRowExpandComponent },
  { path: 'edit-table', component: TableEditComponent },
  { path: 'data-pick-list', component: DataPickListComponent },
  { path: 'auto-complete', component: FormAutoCompleteComponent },
  { path: 'calendar', component: FormCalendarComponent },
  { path: 'checkbox', component: FormCheckboxComponent },
  { path: 'dropdown', component: FormDropdownComponent },
  { path: 'input-group', component: FormInputGroupComponent },
  { path: 'input-mask', component: FormInputMaskComponent },
  { path: 'input-text', component: FormInputTextComponent },
  { path: 'input-switch', component: FormInputSwitchComponent },
  { path: 'input-number', component: FormInputNumberComponent },
  { path: 'multi-select', component: FormMultiSelectComponent },
  { path: 'radio-button', component: FormRadioButtonComponent },
  { path: 'toggle-button', component: FormToggleButtonComponent },
  { path: 'password', component: FormPasswordComponent },
  { path: 'app', component: AppComponent },
  { path: '', redirectTo: '/data-tables', pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToggleButtonModule,
    InputNumberModule,
    TableModule,
    CheckboxModule,
    CalendarModule,
    PasswordModule,
		SliderModule,
    DialogModule,
    RadioButtonModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
    ToastModule,
    InputSwitchModule,
    InputMaskModule,
    InputTextModule,
    ProgressBarModule,
    RatingModule,
    PickListModule,
    AutoCompleteModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, DataTablesComponent, TableRowExpandComponent, TableEditComponent, DataPickListComponent, FormAutoCompleteComponent, FormCalendarComponent, FormCheckboxComponent, FormDropdownComponent, FormInputGroupComponent, FormInputMaskComponent, FormInputTextComponent, FormInputSwitchComponent, FormInputNumberComponent, FormMultiSelectComponent, FormRadioButtonComponent, FormToggleButtonComponent, FormPasswordComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CustomerService, ProductService]
})

export class AppModule { }
