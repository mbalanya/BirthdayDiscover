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

  var sex = discover.gender.value;

  var mname = ['Kwasi', 'Kwadwo', 'Kwebena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var fname = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday']

  var weekday = day[dayOfTheWeek];
  var mAkanName = mname[dayOfTheWeek];
  var fAkanName = fname[dayOfTheWeek]

    if (sex === 'male'){
      alert('You were born on a ' + weekday + ', and your Akan name is ' + mAkanName + '.');
    }else{
      alert('You were born on a ' + weekday + ', and your Akan name is ' + fAkanName + '.');
    }
  }
