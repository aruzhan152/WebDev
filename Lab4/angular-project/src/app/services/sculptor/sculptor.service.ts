import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SculptorService {

  constructor() { }

  getAll():String[]{
    return[
      'assets/images/sculptors/1.0.jpg',
      'assets/images/sculptors/1.1.jpg',
      'assets/images/sculptors/1.2.jpg',
      'assets/images/sculptors/1.3.jpg',
      'assets/images/sculptors/1.4.jpg',
    ]
  }
}
