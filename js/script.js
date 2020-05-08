var discover = document.getElementById('discover');


discover.onsubmit = function(e) {
  e.preventDefault();
  var result = document.getElementById('result');
  var gender = discover.gender.value;
  var birthdayDate = discover.birthdayDate.value;
  result.innerHTML = 'You are a ' + gender + ' born on ' + birthdayDate;
  discover.reset();
};

function validateForm() {
  var x = document.forms['discover']['birthdayDate'].value['gender'].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function calc(){
  var cc = document.getElementById('birthdayDate').value;
  cc = parseInt(cc.charAt(0) + cc.charAt(1));

  var yy = document.getElementById('birthdayDate').value;
  yy = parseInt(yy.charAt(2) + yy.charAt(3));

  var mm = document.getElementById('birthdayDate').value;
  mm = parseInt(mm.charAt(5) + mm.charAt(6));

  var dd = document.getElementById('birthdayDate').value;
  dd = parseInt(dd.charAt(8) + dd.charAt(9));

  var dayOfTheWeek = parseInt(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);

  alert(dayOfTheWeek);
}


var mname = ['Kwame','Kwasi', 'Kwadwo', 'Kwebena', 'Kwaku', 'Yaw', 'Kofi'];
var fname = ['Ama', 'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua'];

//function calc(cc){
  //var result = ((cc/4) -2*cc-1)
//  alert(cc);
//}

//return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7;
