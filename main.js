/*
// let dayname = document.querySelector('#dayname')
// let month = document.querySelector('#month')
// let daynum = document.querySelector('#daynum')
// let year = document.querySelector('#year')

function showDates() {
    let date = new Date()
    let dayname = date.getDay()
    let month = date.getMonth()
    let daynum = date.getDate()
    let year = date.getFullYear()

    let dateValue = `${dayname} ${month} ${daynum} ${year}`
    console.log(dateValue);

    document.getElementById('#datetime').innerText = dateValue
    }
showDates()
*/

    let hrs = document.querySelector('#hours')
    let min = document.querySelector('#minutes')
    let sec = document.querySelector('#seconds')

    function getCurrentTime() {
        let times = new Date()
        let hrs = times.getHours()
        let min = times.getMinutes()
        let sec = times.getSeconds()

        hoursFormate = hrs > 12 ? ('0' + (hrs -12)) : hrs
        minutesFormate = min < 10 ? '0' + min : min
        secondsFormate = sec < 10 ? '0' + sec : sec
        amPmFormate = hrs > 12 ? 'PM' : 'AM'

        let getValue = `${hoursFormate} : ${minutesFormate} : ${secondsFormate}  ${amPmFormate}`

        document.getElementById('clock').innerText = getValue
    }
    setInterval(() => {
        getCurrentTime()
    }, 1000)






