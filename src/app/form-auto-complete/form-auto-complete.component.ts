import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';
import { CountryService } from './../county-service.service';

@Component({
  selector: 'app-form-auto-complete',
  templateUrl: './form-auto-complete.component.html',
  providers: [CountryService]
})
export class FormAutoCompleteComponent implements OnInit { 
    selectedCountry: any;
        
    countries: any[];
        
    filteredCountries: any[];

    selectedCountries: any[];

    selectedCountryAdvanced: any[];

    filteredBrands: any[];

    constructor(private countryService: CountryService) { }

    ngOnInit() {        
        this.countryService.getCountries().then(countries => {
            this.countries = countries;
        });
    }

    filterCountry(event) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered : any[] = [];
        let query = event.query;
        for(let i = 0; i < this.countries.length; i++) {
            let country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        
        this.filteredCountries = filtered;
    }
}
