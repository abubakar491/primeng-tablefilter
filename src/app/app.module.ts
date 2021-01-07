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

import { TableRowExpandComponent } from './table-row-expand/table-row-expand.component';

import { ProductService } from './productservice.service';
import { TableEditComponent } from './table-edit/table-edit.component';
import { DataPickListComponent } from './data-pick-list/data-pick-list.component'

const routes: Routes = [
  { path: 'data-tables', component: DataTablesComponent },
  { path: 'row-expand', component: TableRowExpandComponent },
  { path: 'edit-table', component: TableEditComponent },
  { path: 'data-pick-list', component: DataPickListComponent },
  { path: 'app', component: AppComponent },
  { path: '', redirectTo: '/data-tables', pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    RatingModule,
    PickListModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, DataTablesComponent, TableRowExpandComponent, TableEditComponent, DataPickListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CustomerService, ProductService]
})

export class AppModule { }
