
var customerName = prompt("Please Enter Your Name");
var address; 
var phone;
var order;
var pagelink;
var pagename;


//Name Validtion 
if (customerName==null || customerName==""){
   alert("Name can't be blank");  
   customerName = prompt("Please Enter Your Name");
}

// Print The Name In the Top Of Page 
document.write('<h2> Weclome '+customerName+' </h2>');
   

function myFunction() { 
    
   
   address = prompt("Please Enter Your Address");
   phone = prompt("Please Enter Your Phone");

   order = prompt("Please Enter Your choice the number form list bleow  1 - Food Time  2- Damsucs Food 3- Hut Food");
  
   //Order Validtion 
   if (order!==1 || order!==3){
      alert("order Must be a Number");  
      order = prompt("Please Enter Number of Order");
   

   if (order==1){

    pagelink='https://joudi12.github.io/lab04/';
    pagename='Food Time';

   } else if (order==3){
    pagelink=' https://randalsallaq.github.io/restaurant-04/';
    pagename='Hut Food';
   }
   else {

    pagelink='https://aghyadalbalkhi-asac.github.io/Lab-04---Structure-web-pages-with-HTML/';
    pagename='Damsucs Food';
   }

}
console.log(pagelink);

document.getElementById("IDOFELEMENT").href = pagelink;
document.getElementById("IDOFELEMENT").innerText=pagename;
document.getElementById("orderContent").innerHTML="Your Name is "+customerName+"  and Your Address is : "+address+" your Phone is "+phone;

  }
