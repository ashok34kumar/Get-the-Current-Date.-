let date = new Date()
let dd = date.getDate()
let mm =date.getMonth()+1
let yy = date.getFullYear()
if (dd<10) {
    dd ='0'+dd
}
if (mm<10) {
    mm = '0'+mm
}

let date1 = dd+'-'+mm+'-'+yy
let date2 = dd+'/'+mm+'/'+yy
let date3 = mm+'-'+dd+'-'+yy
let date4 = mm+'/'+dd+'/'+yy

let AllDates =`
<p>Formate1 = ${date1}</p>
<p>Formate2 = ${date2}</p>
<p>Formate3 = ${date3}</p>
<p>Formate4 = ${date4}</p>`

let dateContainer = document.getElementById('date-container');
dateContainer.innerHTML = AllDates 


