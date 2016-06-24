var date = new Date();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var currentDay = days[date.getDay()];
console.log(currentDay)
var div = document.getElementById('date');
//div.innerHTML=currentDay+' TODO List';