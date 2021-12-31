var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = {
    "businessDetails": [
      {
    id:1,
    businessName:"Daraz Store",
    assetType:"Digital Asset",
    monthlyNetProfit: 15000,
    price: 100000,
    businessImg:"https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
    summary:"This is Profitable Business 100%, i am just selling this because due to some other works i cannot give it full concentration, so it would be a good oppertunity.",
    location:"Islamabad",
    businessCreated:"21/12/2015",
    typeOfOffering:"100% Ownership",
    postedOn:"03/04/2020",
  
    },
    {
    id:2,
    businessName:"Potential Wedding Hall",
    assetType:"Physical Asset",
    monthlyNetProfit: 0,
    price: 40000000,
    businessImg:"https://images.unsplash.com/photo-1620735692151-26a7e0748429?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    summary:"Best potential location to construct wedding halls or mega mall as surrounded by 6 to 7 wedding halls and Bazar area. One can earn over four million per month with an investment of 500 million. Located on 6th lane road, 5 kanals corner plot having over 3 kanals additional green belt, which can be utilized for parking. The price declared will only be for three month from date of posting, thereafter seller the right to changethe demand.",
    location:"Lahore",
    businessCreated:"15/10/2019",
    typeOfOffering:"100% Ownership",
    postedOn:"21/12/2021",  
  },
    {
    id:3,
    businessName:"Gym",
    assetType:"Health and Fitness",
    monthlyNetProfit: 20000,
    price: 15000000,
    businessImg:"https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    summary:"Selling this due to lack of time. This is good oppertuinity for individuals for running setup. will proof all the Profits and give consultancy till next 3 months after selling.",
    location:"Peshawar",
    businessCreated:"01/11/2018",
    typeOfOffering:"100% Ownership",
    postedOn:"22/11/2021",  
  },
    {
    id:4,
    businessName:"Garment Shop",
    assetType:"Physical Asset",
    monthlyNetProfit: 65000,
    price: 2500000,
    businessImg:"https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    summary:"Garment shop for sale in Wah Cantt",
    location:"Wah Cantt",
    businessCreated:"15/02/2016",
    typeOfOffering:"100% Ownership",
    postedOn:"22/12/2021",  
  },
    {
    id:5,
    businessName:"Electronics",
    assetType:"Physical Asset",
    monthlyNetProfit: 100000,
    price: 7500000,
    businessImg:"https://images.unsplash.com/photo-1593344484962-796055d4a3a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80",
    summary:"This listing is for an Amazon FBA, eCommerce, and Amazon Associates business created in August 2017 in the electronics niche. The included Amazon Seller Central account features a trademarked brand, that is registered with Amazon Brand Registry 2.0, with 2 SKUs primarily related to security and business electronics. The products rank highly on Google for specific keywords, usually within the top three search results. The business has diverse revenue streams and requires 12 hours a week to maintain.",
    location:"Islamabad",
    businessCreated:"22/03/2013",
    typeOfOffering:"100% Ownership",
    postedOn:"12/11/2020",  
  },
    {
    id:6,
    businessName:"Web Hosting Service",
    assetType:"Digital Asset",
    monthlyNetProfit: 100000,
    price: 9500000,
    businessImg:"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    summary:"I am not giving proper time due to my duties and i want to sell my running business . I have more than 400 web hosting domains clients and one dedicated server in usa.",
    location:"Karachi",
    businessCreated:"07/10/2010",
    typeOfOffering:"100% ownership",
    postedOn:"15/12/2021"
    }
    ]
  };
  res.json(jsonResponse);

});

module.exports = router;

router.post ('/', function(req, res, next) {
  console.log(req.body);
  res.json(jsonResponse);
})
