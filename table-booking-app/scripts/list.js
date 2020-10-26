let bookingList = document.getElementById("booking-list");
window.addEventListener("load", function(){
    GetBookings()
});

function GetBookings(){

    let url = 'https://api.sheety.co/b1f53e4c88d72f573003fe5f64e85664/bookingApp/form';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      //console.log(json.bookings); // commented out
      var bookings = document.getElementById("booking-list");
      var bookingIds = [];
      
      for(var i = 0; i < json.form.length; i++){
        var gName = json.form[i].name;
        var gEmail = json.form[i].email;
        var gPax = json.form[i].pax;
        var gId = json.form[i].id;
        var buttonId = "delete" + gId;

        let row = bookings.insertRow(bookings.rows.length);
        row.insertCell (0).innerHTML = gId;
        row.insertCell (1).innerHTML = gName;
        row.insertCell (2).innerHTML = gEmail;
        row.insertCell (3).innerHTML = gPax;
        row.insertCell (4).innerHTML = ""; //Remarks
        row.insertCell (5).innerHTML = "<button id='" + buttonId + "' class='btn btn-danger'>Delete</button><br/>";
    
       bookingIds.push(buttonId);
      }
        for (let j = 0; j < bookingIds.length; j++){
          //console.log(bookingIds[j]);
          let el = document.getElementById(bookingIds[j]);
          el.addEventListener("click",function(){
            let theId = bookingIds[j].replace("delete","");
            DeleteBooking(theId);
        })
      }
    }); 
}

/*********************Delete Booking***********************/
function DeleteBooking(id){
  if(confirm("Are you sure you want to delete?")){
    let url = 'https://api.sheety.co/b1f53e4c88d72f573003fe5f64e85664/bookingApp/form/' + id;
    fetch(url, {
      method: 'DELETE',
    })
    .then((response) => {
      let table = document.getElementById("booking-list");
      for(let i = 1; i < table.rows.length; i++){
        table.deleteRow(i);
      }
      GetBookings();
    });
  } else{
      alert("Delete cancelled")
  }  
}
