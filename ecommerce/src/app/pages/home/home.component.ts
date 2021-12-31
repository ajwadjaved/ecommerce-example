import { Component, OnInit } from '@angular/core';
import { BusinessDetailsService } from 'src/app/services/business-details.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  businessDisplay: any = [];  

  constructor(public service: BusinessDetailsService) { 
  
  
    this.service.getBusiness().subscribe((
      response) => {
        this.businessDisplay =response.businessDetails;
      });
  }

    ngOnInit(): void {


    }
  }
  