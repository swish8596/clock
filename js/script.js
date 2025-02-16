let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow   = document.querySelector('.h'),
    hourBox     = document.querySelector('.hours'),
    minuteBox   = document.querySelector('.minutes');
    
    
// new Date() - возвращает информацию о дате и времени
   
function startWatch() {
    let time = new Date()
    let seconds = time.getSeconds()
    let minutes = time.getMinutes()
    let hours   = time.getHours()
    
    secondArrow.style = `transform: rotate(${seconds * 6}deg)`
    minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
    hourArrow.style = `transform: rotate(${hours * 30}deg)` 
    
    hourBox.innerHTML = hours < 10 ? '0' + hours : hours
    minuteBox.innerHTML = minutes < 10 ? '0' + minutes : minutes
    
    
    setTimeout(() => startWatch(), 1000)
}
startWatch()


// рекурсия - это когда функция запускает саму себя
// setTimeout() - встроенная функция которая добавляет задержку

// let i = 0;

// function rek() {
//     if(i < 10) {
//         console.log(i);
//         i++
//         setTimeout(() => rek(), 1000)
//     }
// }
// rek()



let links = document.querySelectorAll('.tabsItem')
let tabs  = document.querySelectorAll('.tabsContentItem')



links.forEach((link,i) =>  {
    link.addEventListener('click', () => {
        removeActive()
        link.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive () {
    links.forEach((link,i) => {
       link.classList.remove('active') 
       tabs[i].classList.remove('active')
    })
}



let hourSec = document.querySelector('.stopwatch__hours'),
    minuteSec = document.querySelector('.stopwatch__minutes'),
    secondSec = document.querySelector('.stopwatch__seconds'),
    btn       = document.querySelector('.stopwatch__btn'),
    span      = document.querySelector('.tabsLink__span');
    
btn.addEventListener('click', () => {
    if(btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        span.classList.add('active')
        let i = 0
        setTimeout(() => createSecundomer(btn, i), 1000)
    }else if(btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        span.classList.remove('active')
        span.classList.add('active_clear')
    }else {
        span.classList.remove('active_clear')
        btn.innerHTML = 'start'
        hourSec.innerHTML = 0
        minuteSec.innerHTML = 0
        secondSec.innerHTML = 0
    }
})


function createSecundomer(button, i) {
    if(button.innerHTML == 'stop') {
        if(i == 59) {
            i = 0
            secondSec.innerHTML = i
            if(minuteSec.innerHTML == 59) {
                minuteSec.innerHTML = 0
                hourSec.innerHTML++
            }else {
                minuteSec.innerHTML++
            }
        }else {
            i++
            secondSec.innerHTML = i
        }
        setTimeout(() => createSecundomer(button, i), 1000)
    }
}