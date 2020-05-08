var elements = ""
var year;
for(year= 1900; year < 2021; year++){
    elements += "<option value='"+ year + "'>" + year + "</option>";
}


document.getElementById("selBox").innerHTML = elements;

mname = ['Kwame','Kwasi', 'Kwadwo', 'Kwebena', 'Kwaku', 'Yaw', 'Kofi'];
fname = ['Ama', 'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua'];
