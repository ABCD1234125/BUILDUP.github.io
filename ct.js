
function ok() {
    setTimeout(() => {
        document.querySelector('.para').style.display = 'none'
        document.querySelector('.POLICY').style.display = 'none'
        document.getElementById('btn').style.display = 'block'
    }, 10);
}


function select() {
    let Grade = document.getElementById('Grade');
    if (Grade.value == '9') {
        setTimeout(() => {
            document.querySelector('.SYLLABUS').style.display = 'block'
            // document.querySelector('.SPAN1').style.display = 'block'
            document.getElementById("Grade").style.display = 'none'
        document.getElementById('btn').style.display = 'block'
        document.getElementById("TIMER").style.display = 'block'

        }, 2000);
    }
    else if (Grade.value == '10') {
        document.querySelector('.SYLLABUS').style.display = 'block'
        document.querySelector('.SCIENCE2').style.display = 'block'
        document.getElementById("Grade").style.display = 'none'
        document.getElementById('btn').style.display = 'block'
        document.getElementById("TIMER").style.display = 'block'
    } else if (Grade.value == '11') {
        document.querySelector('.SYLLABUS').style.display = 'block'
        document.querySelector('.SCIENCE3').style.display = 'block'
        document.getElementById("Grade").style.display = 'none'
        document.getElementById('btn').style.display = 'block'
        document.getElementById("TIMER").style.display = 'block'
    } else if (Grade.value == '12') {
        document.querySelector('.SYLLABUS').style.display = 'block'
        document.querySelector('.SCIENCE4').style.display = 'block'
        document.getElementById("Grade").style.display = 'none'
        document.getElementById('btn').style.display = 'block'   
        document.getElementById("TIMER").style.display = 'block'
    }
    else {
        alert("PLEASE SELECT A CORRECT VALUE")
    }
}

// for setting timer 
 let timer2  = 10;
 var mytimer = setInterval(() => {
    document.getElementById("TIMER").innerHTML = "PLEASE WAIT FOR " + timer2-- +" SEC";
    if(timer2 == 0){
        clearInterval(mytimer);
        document.getElementById("btn").disabled = false;
    }
 }, 1000);
//for setting timer


function myfunction(){
    location.replace('https://abcd1234125.github.io/BUILDUP.githuub.io/maintest.html');
}

