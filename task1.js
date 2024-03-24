

 $(document).ready(function () {
   $('#submit').click(function(){
      $(':input').each(function(){
         alert($(this).val());
         
      })
  });     
});

$(function(){
   $("input[name='ph']").on('input', function (e) {
       $(this).val($(this).val().replace(/[^0-9]/g, ''));
   });
   $("input[name='zip']").on('input', function (e) {
       $(this).val($(this).val().replace(/[^0-9]/g, ''));
   });
});

$(document).ready(function()  {
   $("#firstNameInput").keyup(function()  {
     $("#firstNameInput").css("textTransform", "capitalize");
   });
   $("#lastNameInput").keyup(function()  {
     $("#lastNameInput").css("textTransform", "capitalize");
   });
})





var statecity = {
   "Telangana": {
   
     "Karimnagar": ["karimpet", "karimganj", "kerapet", "pedapet"],
     
     "Hyderabad": ["Madhapur", "HiTech City", "Gachibowli", "Kondapur"],
     
     "Warangal": ["Wadapet", "Javanagar", "CSSnagar", "JSnagar"]    
   },
   
 
   "Andhra Pradesh": {
     "Srikakulam": ["Srikakota", "Sirinagar", "Palasa"],
     "East Godavari": ["Rajahmundry", "Dhawaleswaram", "Rajanagaram"],
     "Kakinada": ["Surempalem","Peddapuram","Ragampeta"]
   }
 }
 window.onload = function() {
   var stateSel = document.getElementById("states");
   var districtSel = document.getElementById("districts");
   var citySel = document.getElementById("cities");
   for (var x in statecity) {
     stateSel.options[stateSel.options.length] = new Option(x, x);
   }
   
   
   stateSel.onchange = function() {
  citySel.length = 1;
  districtSel.length = 1;
     for (var y in statecity[this.value]) {
       districtSel.options[districtSel.options.length] = new Option(y, y);
     }
   }
   
   districtSel.onchange = function() {
  citySel.length = 1;
     var z = statecity[stateSel.value][this.value];
     for (var i = 0; i < z.length; i++) {
       citySel.options[citySel.options.length] = new Option(z[i], z[i]);
     }
   }
 }






 function clearErrors(){
   errors = document.getElementsByClassName('formerror');
       for(let item of errors)
       {
           item.innerHTML = "";
       }
}
function seterror(id, error){
   element = document.getElementById(id);
   element.getElementsByClassName('formerror')[0].innerHTML = error;

}
function validate(){
var returnval = true;
clearErrors();

var name = document.forms['form']["firstname"].value;
if (name.length<3){
   seterror("name", "*Length of name is too short");
   returnval = false;
}

if (name.length == 0){
   seterror("name", "*Length of name cannot be zero!");
   returnval = false;
}


var phone = document.forms['form']["ph"].value;
if (phone.length != 10){
   seterror("phone", "*Phone number should be of 10 digits!");
   returnval = false;
}
return returnval;
}



 