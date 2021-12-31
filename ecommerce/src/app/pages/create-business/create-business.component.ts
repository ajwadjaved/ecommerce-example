import { Component, OnInit } from '@angular/core';


import { BusinessDetailsService } from 'src/app/services/business-details.service';

@Component({
  selector: 'app-create-business',
  templateUrl: './create-business.component.html',
  styleUrls: ['./create-business.component.css']
})
export class CreateBusinessComponent {

  constructor(private service: BusinessDetailsService) { }

  ngOnInit(): void {
  }

  addNewProduct(form: any) {
    console.log(form.value);


    let newBusiness = {
      'id': 9,
      'businessName': form.value.businessName,
      'assetType': form.value.assetType,
      'monthlyNetProfit': form.value.monthlyNetProfit,
      'price': form.value.businessPrice,
      'summary': form.value.description,
      'location':form.value.location

    };
    console.log(newBusiness);

    this.service.createBusiness(newBusiness).subscribe(data => {
      console.log(data);
    });

  }
}

// i created an object, assign all the values from the form to the object - newBusiness - 
// passing  the object to the create method. in the create method, in the ServiceWorker, we are doing 
// a post, because we are creating a new resource