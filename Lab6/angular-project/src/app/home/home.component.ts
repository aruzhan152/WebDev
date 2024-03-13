import { Component,OnInit } from '@angular/core';
import {SculptorService} from '../services/sculptor/sculptor.service';
import {Sculptor} from '../shared/models/Sculptor';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  sculptors:Sculptor[]=[];

  constructor(private sculptorService:SculptorService, private route:ActivatedRoute){}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      if(params.searchTerm)
     this.sculptors=this.sculptorService.getAllSculptorsBySearchTerm(params.searchTerm);
      else if(params.tag)
      this.sculptors = this.sculptorService.getAllSculptorsByTag(params.tag);
      else
      this.sculptors=this.sculptorService.getAll();
    }) 
}}
