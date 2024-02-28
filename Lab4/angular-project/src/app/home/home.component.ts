import { Component,OnInit } from '@angular/core';
import {SculptorService} from '../services/sculptor/sculptor.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  sculptors:String[]=[];

  constructor(private sculptorService:SculptorService){}
  
  ngOnInit(): void{
    this.sculptors=this.sculptorService.getAll();
  }
}
