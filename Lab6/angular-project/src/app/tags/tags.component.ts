import { Component, OnInit } from '@angular/core';
import {Tag} from '../shared/models/Tag'
import { SculptorService } from '../services/sculptor/sculptor.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  tags:Tag[] = [];
  constructor(private sculptorService:SculptorService){}
  ngOnInit():void{
    this.tags=this.sculptorService.getAllTags();
  }

}
