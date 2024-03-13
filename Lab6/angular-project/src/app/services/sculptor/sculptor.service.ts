import { Injectable } from '@angular/core';
import {Sculptor} from '../../shared/models/Sculptor';
import {Tag} from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class SculptorService {

  constructor() { }
  
  getSculptorsById(id:number) : Sculptor{
    return this.getAll().find(sculptor=>sculptor.id == id)!;
  }
  getAllSculptorsBySearchTerm(searchTerm:string) :Sculptor[]{
  return this.getAll().filter(sculptor => sculptor.name.toLowerCase().includes(searchTerm.toLowerCase()))

  }
  getAllTags():Tag[]{
    return [
      {name:'All', count:5},
      {name:'Blush', count:2},
      {name:'Bronzer', count:3},
  ]
  }
 getAllSculptorsByTag(tag: string):Sculptor[]{
    if(tag=="All")
      return this.getAll();
    else
      return this.getAll().filter(food => food.tags?.includes(tag));
 }
  getAll():Sculptor[]{
    return[
      {
        id:1,
        name:'SHIK Perfect Liquid blush',
        tags:['Blush'],
        favorite:false,
        rating:4.5,
        imageUrl:'/assets/images/sculptors/1.0.jpg',
        description:'Blush with a weightless, airy texture to create natural makeup.',
        buyLink:'link',
      },
      {
        id:2,
        name:'Dior Backstage Rosy Glow Blush',
        tags:['Blush'],
        favorite:true,
        rating:5,
        imageUrl:'/assets/images/sculptors/1.1.jpg',
        description:'New pure formula that blends flawlessly with the skin, giving the cheeks an instant effect of healthy radiance.',
        buyLink:'link',
      },
      {
        id:3,
        name:'Charlotte Tilbury Filmstar Bronze and Glow Bronzer',
        tags:['Bronzer'],
        favorite:false,
        rating:5,
        imageUrl:'/assets/images/sculptors/1.2.jpg',
        description:'Iconic powder contour and highlight palette for fair to medium skin tones',
        buyLink:'link',
      },
      {
        id:4,
        name:'SHIK Perfect Liquid Contour ',
        tags:['Bronzer'],
        favorite:true,
        rating:4.7,
        imageUrl:'/assets/images/sculptors/1.3.jpg',
        description:'It is ideal for modeling the oval of the face, has a soft creamy texture',
        buyLink:'link',
      },
      {
        id:5,
        name:'NYX 3 Steps to Sculpt Face Sculpting Palette',
        tags:['Bronzer'],
        favorite:true,
        rating:5,
        imageUrl:'/assets/images/sculptors/1.4.jpg',
        description:'Creates a dense coating that noticeably corrects the shape of the face',
        buyLink:'link',
      },
    ]
  }
}
