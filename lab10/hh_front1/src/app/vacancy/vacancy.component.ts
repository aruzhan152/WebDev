import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Vacancy } from '../models/vacancy';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent {
  @Input() vacancy!: Vacancy;
}
