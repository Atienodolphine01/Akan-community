var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var daysOfWeek=["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];



// calling function
  function getName(){
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  day = parseInt(document.getElementById("day").value);
  male=document.getElementById("male");
  female=document.getElementById("female");

// validation
if(day<=0||day>31)
alert("Oops!please enter a valid day");
else if(month<0||month>12 ||month ==2 && day>29)
alert("Oops!please enter a valid month");
else if(year<0||year>2020)
alert("Invalid date");


var day = new Date(year + "/" + month + "/" + day);

var birthDay=day.getDay();

if(male.checked==true){
   alert("You were born on " +daysOfWeek[birthDay]+ " and your akan name is " + maleNames[birthDay])
}
else if(female.checked==true){
   alert("You were born on " +daysOfWeek[birthDay]+ " and your akan name is " + femaleNames[birthDay])
}

}
