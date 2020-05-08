var elementsy = ""
var elementsm = ""
var elementsd = ""
var year;
var month;
var day;
for(year= 1900; year < 2021; year++){
    elementsy += "<option value='"+ year + "'>" + year + "</option>";
}
document.getElementById("selectYear").innerHTML = elementsy;

for(month= 1; month < 13; month++){
    elementsm += "<option value='"+ month + "'>" + month + "</option>";
}
document.getElementById("selectMonth").innerHTML = elementsm;

for(day= 1; day < 32; day++){
    elementsd += "<option value='"+ day + "'>" + day + "</option>";
}
document.getElementById("selectDay").innerHTML = elementsd;

mname = ['Kwame','Kwasi', 'Kwadwo', 'Kwebena', 'Kwaku', 'Yaw', 'Kofi'];
fname = ['Ama', 'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua'];
