import { Injectable } from '@angular/core';
import {Sculptor} from '../../shared/models/Sculptor';
@Injectable({
  providedIn: 'root'
})
export class SculptorService {

  constructor() { }

  getAll():Sculptor[]{
    return[
      {
        id:1,
        name:'SHIK Perfect Liquid blush',
        price:3610,
        tags:['Bronzers and Blushes', 'Shik'],
        favorite:false,
        rating:4.5,
        imageUrl:'/assets/images/sculptors/1.0.jpg',
        shade:2,
      },
      {
        id:2,
        name:'Dior Backstage Rosy Glow Blush',
        price:22800,
        tags:['Bronzers and Blushes', 'Dior'],
        favorite:true,
        rating:5,
        imageUrl:'/assets/images/sculptors/1.1.jpg',
        shade:1,
      },
      {
        id:3,
        name:'Charlotte Tilbury Filmstar Bronze and Glow Bronzer',
        price:32000,
        tags:['Bronzers and Blushes', 'Charlotte Tilbury'],
        favorite:false,
        rating:5,
        imageUrl:'/assets/images/sculptors/1.2.jpg',
        shade:2,
      },
      {
        id:4,
        name:'Charlotte Tilbury Filmstar Bronze and Glow Bronzer',
        price:4098,
        tags:['Bronzers and Blushes', 'Shik'],
        favorite:true,
        rating:4.7,
        imageUrl:'/assets/images/sculptors/1.3.jpg',
        shade:2,
      },
      {
        id:5,
        name:'NYX Professional Makeup 3 Steps to Sculpt Face Sculpting Palette',
        price:8000,
        tags:['Bronzers and Blushes', 'NYX'],
        favorite:true,
        rating:5,
        imageUrl:'/assets/images/sculptors/1.4.jpg',
        shade:1,
      },
    ]
  }
}
