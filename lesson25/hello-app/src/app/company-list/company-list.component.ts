import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from '../shared/country';
import { ICountry } from '../shared/models/country';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent {
  public countries: ICountry[] = COUNTRIES.slice();

  addCountry(country: string, capital: string): void {
    if(!country || !capital) return;
    this.countries.push( { country, capital } )
  }

  deleteCountry(countryName: string) {
    this.countries = this.countries.filter( (country: ICountry) => country.country != countryName)
  }
}
