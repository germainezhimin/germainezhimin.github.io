function getRandomUser (){
    var xhttp = new XMLHttpRequest ();
    xhttp.onreadystatechange = function (){
     if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.response);
        var elFirstName = document.getElementById("firstName");
        var elLastName = document.getElementById("lastName");
        var eljsonResult = document.getElementById("jsonResult");
        var eluserImage  = document.getElementById("userImage");
        var elphone  = document.getElementById("phone");
        var elemail  = document.getElementById("email");
        var eladdress  = document.getElementById("address");
       
       elFirstName.innerHTML = data.results[0].name.first;
       elLastName.innerHTML = data.results[0].name.last;
       eljsonResult.innerHTML = this.response;
       elphone.innerHTML = data.results[0].phone;
       elemail.innerHTML = data.results[0].email;  
       eladdress.innerHTML = data.results[0].location.street.number + " " + data.results[0].location.street.name +",<br/>"+ data.results[0].location.city +", "+ data.results[0].location.state +",<br/>"+ data.results[0].location.postcode; 
       eluserImage.src = data.results[0].picture.large;
       eluserImage.title = data.results[0].name.first + " " + data.results[0].name.last;
     }
       
    }
    xhttp.open("GET", "https://randomuser.me/api/", true);
    xhttp.send();
  }
  
  var elGetRandomUser = document.getElementById("getRandomUserBtn");
  elGetRandomUser.addEventListener("click", function(){
    getRandomUser();
  })
  /**testing */