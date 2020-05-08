var discover = document.getElementById('discover');
var mname = ['Kwame','Kwasi', 'Kwadwo', 'Kwebena', 'Kwaku', 'Yaw', 'Kofi'];
var fname = ['Ama', 'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua'];

discover.onsubmit = function(e) {
  e.preventDefault();
  var result = document.getElementById('result');
  var gender = discover.gender.value;
  var birthdayDate = discover.birthdayDate.value;
  result.innerHTML = 'You are a ' + gender + ' born on ' + birthdayDate;

  discover.reset();

};

calculator = function(gender, birthdayDate){

}
