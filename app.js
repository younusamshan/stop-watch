


var mintes = 0
var seconds = 0
var millimets = 0



var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmili = document.getElementById('mili')


var interval ;



function start(){
    interval = setInterval(function(){
        millimets++
        getmili.innerHTML = millimets
        if(millimets >= 100){
            seconds++
            getsec.innerHTML = seconds
            millimets = 0
        }else if(seconds >= 5){
            mintes++
            getmin.innerHTML = mintes
            seconds = 0
        }
    },10)
    document.getElementById('sss').disabled = true
}




function stop(){
    clearInterval(interval)
    document.getElementById('sss').disabled = false
}





function rest(){
    
    var mintes = 0
    var seconds = 0
var millimets = 0
getmili.innerHTML = millimets
getsec.innerHTML = seconds 
getmin.innerHTML = mintes
}