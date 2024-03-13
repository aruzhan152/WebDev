import { Component, OnInit } from '@angular/core';
import { Sculptor } from '../shared/models/Sculptor';
import { ActivatedRoute,Router } from '@angular/router';
import { SculptorService } from '../services/sculptor/sculptor.service';

@Component({
  selector: 'app-sculptorpage',
  templateUrl: './sculptorpage.component.html',
  styleUrl: './sculptorpage.component.css'
})
export class SculptorpageComponent implements OnInit{
  sculptor!:Sculptor;
  constructor(private activatedRoute:ActivatedRoute, 
    private sculptorService:SculptorService){
    activatedRoute.params.subscribe((params) =>{
      if(params.id)
      this.sculptor = sculptorService.getSculptorsById(params.id);
    })
  }
  ngOnInit(): void {
      
  }

}
