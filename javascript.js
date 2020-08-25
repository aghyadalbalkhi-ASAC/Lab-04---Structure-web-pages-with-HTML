
var customerName;
var address; 
var phone;
var order;
var NoItems;
var pagelink;
var pagename;
function myFunction() { 
    
   customerName = prompt("Please Enter Your Name");
   address = prompt("Please Enter Your Address");
   phone = prompt("Please Enter Your Phone");
   order = prompt("Please Enter Your choice form list bleow /n 1 - Food Time  /n 2- Damsucs Food 3- Hut Food");

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
console.log(pagelink);

document.getElementById("IDOFELEMENT").href = pagelink;
document.getElementById("IDOFELEMENT").innerText=pagename;
document.getElementById("orderContent").innerHTML="Your Name is "+customerName+"  and Your Address is : "+address+" your Phone is "+phone;

  }
