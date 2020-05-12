var discover = document.getElementById('discover');

discover.onsubmit = function(e) {
  e.preventDefault();
  var result = document.getElementById('result');
  var gender = discover.gender.value;
  var birthdayDate = discover.birthdayDate.value;
  result.innerHTML = 'You are a ' + gender + ' born on ' + birthdayDate;
  share.innerHTML = 'Now Share this site with your <strong>Friends</strong>'
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
  var date = document.getElementById('birthdayDate').value;
  var date = new Date(date);
  var day = date.getDay();

  var sex = discover.gender.value;

  var mname = ['Kwasi', 'Kwadwo', 'Kwebena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var fname = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  var dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday']

  var dayAsString = dayOfTheWeek[day];
  var mAkanName = mname[day];
  var fAkanName = fname[day];


    if (sex === 'male'){
      alert('You were born on a ' + dayAsString + ', and your Akan name is ' + mAkanName + '.');
    }else{
      alert('You were born on a ' + dayAsString + ', and your Akan name is ' + fAkanName + '.');
    }
  }
