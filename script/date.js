window.onload =function(){
	var dayName = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	var monName = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	var now = new Date;
	var today =("" + dayName[now.getDay()] + ", " + monName[now.getMonth()] + " "+now.getDate() +".") 
	document.getElementById("date").innerHTML=today;
};
