function validateForm() {
  let arr=[];
  var Title = document.forms["myForm"]["title"].value;
	if(document.myForm.title.selectedIndex==0){
 	arr.push("Please select your Title");
	//document.myForm.title.focus();
	//return false;
	}
  var FName = document.forms["myForm"]["fname"].value;
  var validRegex = /^[a-zA-Z][\.][a-zA-Z]/;
  	if (FName == "" || !FName.match(validRegex)){
    	arr.push("Fname must be start with letter and then dot(.)");
    	//return false;
  }
    var Initial = document.forms["myForm"]["initial"].value;
  //  var validRegex = /^[a-zA-Z][\.][a-zA-Z]/;
    	if (Initial == "" || !Initial.match(validRegex)){
      	arr.push("Initials must be start with letter and then dot(.)");
      	//return false;
  }
    var LName = document.forms["myForm"]["lname"].value;
 //   var validRegex = /^[a-zA-Z][\.][a-zA-Z]/;
    	if (LName == "" || !LName.match(validRegex)){
      	arr.push("Last Name must be start with letter and then dot(.)");
      	//return false;
  }
    var adds = document.forms["myForm"]["address"].value;
    var validRegex = /^[0-9]+\s+[A-Za-z]+\s+[0-9]/;
    	if (adds== "" || !adds.match(validRegex)){
      	arr.push("Street Address must be start with number and contain alphabet only");
      	//return false;
  }
    var adds2 = document.forms["myForm"]["address2"].value;
    var validRegex = /^[0-9]+\s+[a-zA-Z]+\s+[0-9]/;
    	if (adds2== "" || !adds2.match(validRegex)){
      	arr.push("Street Address2 must be start with number and contain alphabet only");
      	//return false;
  }
      var Country = document.forms["myForm"]["country"].value;
    //  console.log(document.myForm.country.selectedIndex==0);
	if(document.myForm.country.selectedIndex==0){
 	arr.push("Please select your Country");
	//return false;
	}

    var Region = document.forms["myForm"]["region"].value;
   // console.log(document.myForm.region.selectedIndex==0);
    	if (document.myForm.region.selectedIndex==0){
      	arr.push("Please select your Region");
      	//return false;
  }
    var ZipCode = document.forms["myForm"]["zipcode"].value;
  	if (ZipCode.length <6 || ZipCode.length>6){
   	arr.push("ZipCode must be at least 6 digit number");
   	//return false;
  }
    var City = document.forms["myForm"]["city"].value;
	if(document.myForm.city.selectedIndex==0){
 	arr.push("Please select your City");
	//return false;
	}
  var Phone = document.forms["myForm"]["phone"].value;
  var validRegex = /^[6-9]/;
  	if (!Phone.match(validRegex) || Phone.length<10 || Phone.length>10){
   	arr.push("Customer Phone must be in between 6-9 digit number");
   	//return false;
  }
    var Fax = document.forms["myForm"]["fax-no"].value;
	//console.log(Fax.length <8 || Fax.length>8);
  	if (Fax.length <8 || Fax.length>8){
   	arr.push("Customer Fax must be at least 8 digit number");
   	//return false;
  }

    var email=document.forms["myForm"]["email"].value;
  var validRegex = /^[a-zA-Z0-9\_\.]+[@][a-z]+[\.][a-z]/;
  if (!email.match(validRegex)) 
  {
    arr.push("Please enter a valid Customer ID/Email!");
    //return false;
  }
  //console.log(!document.getElementById('allow-checkbox').checked);
      if(!document.getElementById('allow-checkbox').checked){
      arr.push("CheckBox is not checked");
     // return false;
  }
  let errormsg = '';
  let array=arr.length;
  for(let i=0; i<array; i++) {
  	errormsg = errormsg + arr[i] + '\n';
  }
  console.log(errormsg);
 	if(errormsg.length>0){
 	alert(errormsg);
 	return false;
  }
  }
var countryObject={
	"India":{
	"Uttarakhand":["Nainital","Dehradun","Haridwar"],
	"Madhya Pradesh":["Indore","Bhopal","Gwalior"],
	"Bangalore":["Mangaluru","Mysore","Bellary"]
	},
	"Japan":{
	"Hokkaido":["Yokohama","Osaka","Nagoya"],
	"Tohoku":["Nagoya","Sapporo","Fukuoka"],
	"Kanto":["Kobe","Kawasaki","Kyoto"],
	}
}
	
window.onload = function(){
	var countrysel = document.getElementById("country");
	var regionsel = document.getElementById("region");
	var citysel = document.getElementById("city");
	for(var x in countryObject){
		countrysel.options[countrysel.options.length]=new Option(x,x);
		}
	countrysel.onchange=function(){
		regionsel.length=1;
		citysel.length=1;
		
	for(var y in countryObject[this.value]){
		regionsel.options[regionsel.options.length]=new Option(y,y);
		}
		}
	regionsel.onchange=function(){
		citysel.length=1;
		var z= countryObject[countrysel.value][this.value];
	for(var i=0;i<z.length;i++){
		citysel.options[citysel.options.length]=new Option(z[i],z[i]);
		}
	}
} 
