import { Component,OnInit } from '@angular/core';
import {SculptorService} from '../services/sculptor/sculptor.service';
import {Sculptor} from '../shared/models/Sculptor';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  sculptors:Sculptor[]=[];

  constructor(private sculptorService:SculptorService){}

  ngOnInit(): void{
    this.sculptors=this.sculptorService.getAll();
  }
}
