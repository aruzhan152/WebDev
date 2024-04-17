import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Vacancy } from './models/vacancy';
import { Company } from './models/company';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private client: HttpClient) {
    }

    getCompanies(): Observable<Company[]> {
        return this.client.get<Company[]>('http://127.0.0.1:8000/companies');
    }
    getCompany(id: number): Observable<Company> {
        return this.client.get<Company>(`http://127.0.0.1:8000/companies/${id}`);
    }

    getVacancies(id: number): Observable<Vacancy[]> {
        return this.client.get<Vacancy[]>(`http://127.0.0.1:8000/companies/${id}/vacancies`);
    }

    getTopTenVacancy(): Observable<Vacancy[]> {
        return this.client.get<Vacancy[]>(`http://127.0.0.1:8000/vacancies/top_ten`);
    }




}