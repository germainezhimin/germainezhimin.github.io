/***********Book Now **********************/
function BookNow(guestName,guestEmail,guestPax){
    let url = 'https://api.sheety.co/1710624b874026051aeeb755b5a8f094/bookingApp/bookings/';
   let body = {
     form: {
      name:guestName,
      email:guestEmail,
      pax:guestPax,
      remarks:guestRemarks
     }
   }
   fetch(url, {
     method: 'POST',
     body: JSON.stringify(body),
     headers:{
       "Content-Type":"application/json"
     }
   })
   .then((response) => response.json())
   .then(json => {
     // Do something with object
     console.log(json.bookings);
     document.getElementById("booking").innerHTML = json.bookings.name + "  successfully added!";
      GetBookings();
   });
  }
  
document.getElementById("bookNow").addEventListener("click", function(){
    let guestname = document.getElementById("guestName").value;
    let guestemail = document.getElementById("guestEmail").value;
    let guestpax = document.getElementById("guestPax").value;
    let remarks = document.getElementById("guestRemarks").value;
    console.log(name + "," + email + "," + pax + "," + remarks );
});