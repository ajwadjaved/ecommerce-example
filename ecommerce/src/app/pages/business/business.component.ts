import { Component, OnInit } from '@angular/core';
import { BusinessDetailsService } from 'src/app/services/business-details.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businessDisplay: any = [];  

  constructor(public service: BusinessDetailsService
    ) { 
  
  
    this.service.getBusiness().subscribe((
      response) => {
        this.businessDisplay =response.businessDetails;
      });
  }

    ngOnInit(): void {


    }
  }