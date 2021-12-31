import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessDetailsService } from 'src/app/services/business-details.service';

@Component({
  selector: 'app-view-business',
  templateUrl: './view-business.component.html',
  styleUrls: ['./view-business.component.css']
})
export class ViewBusinessComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:BusinessDetailsService) { }

  businessDisplay: any = [];  
  getBusinessId:any;

  ngOnInit(): void {

    this.getBusinessId = this.param.snapshot.paramMap.get('id');
    console.log(this.getBusinessId,'getbusiness')

    {
      this.service.getBusiness().subscribe((
        response) => {
          this.businessDisplay =response.businessDetails;
        });
      console.log(this.businessDisplay,'businessDisplay>>');
    }
      }
    
    }
    