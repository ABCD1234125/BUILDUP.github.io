
console.log("hello")

console.log("CLEAR THE TEST");

let timer = 100;
let Examtimer = setInterval(() => {
  document.querySelector('.TESTTIMER').innerHTML = " YOUR EXAM WILL BE OVER IN -: " + timer-- + "s (1:40 s)";
  if (timer == -1) {
    // alert("YOUR TEST IS AUTOMATICALLY SUBMITTED");
    document.querySelector('.YO').innerHTML = "YOUR TEST IS AUTOMATICALLY SUBMITTED"
    clearInterval(Examtimer);
    document.querySelector('.input1').style.display = 'none';
    document.querySelector('.Q1').style.display = 'none'
    document.querySelector('.Q2').style.display = 'none';
    document.querySelector(".Q3").style.display = 'none';
    document.querySelector(".Q4").style.display = 'none';
    document.querySelector(".Q5").style.display = 'none';
    document.querySelector(".Q6").style.display = 'none'

  }


}, 1000);



// to check whether the value writtn is correct or not 
function rdirect() {
  location.replace('http://127.0.0.1:5500/testyself/CheckResult.html');
}

function btn() {
clearInterval(Examtimer);
  let arr = ['VELOCITY', 'ANDROECIUM', 'SEPAL', 'OVARY,OVULE', 'ANAEMOPHILY', '4m']
  let testContainer = document.querySelectorAll(".input1");
  let Container = document.querySelectorAll('.testContainer');
  if (testContainer[0].value == "VELOCITY" && testContainer[1].value == "ANDROECIUM" && testContainer[2].value == "SEPAL" && testContainer[3].value == "OVARY,OVULE" && testContainer[4].value == "ANAEMOPHILY" && testContainer[5].value == "4m") {
    document.getElementById("Correct").innerText = 10;
   
 
      // FOR ADDING INFO THROUGH NOTIFICATION
      function Newtest() {
        const notification = new Notification('NEW INFO FROM DEVELOPER(AADITYA SINGH)', ({
          body: "NEW TESTS WILL BE ADDED  TOMORROW BE READY",
          icon: "https://cdn-icons.flaticon.com/png/512/2995/premium/2995522.png?token=exp=1658825038~hmac=dce80c1e0c991d6133af040e99c0a873",
          vibrate: [200, 100, 100]
        }));
        notification.onclick = (e) => {
          window.location.href = 'https://abcd1234125.github.io/BUILDUP.github.io/maintest.html';
        }
      }
      Newtest();
  
      //if user deny or allow the permision 
      if (Notification.permission === "granted") {
        showNotification();
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            showNotification();
          }
        });
      }
    setTimeout(() => {
  document.getElementById("animate").style.display = 'block';
  document.getElementById("load").innerHTML = 'YOU GOT 10/10 HURRAy!'
}, 5000);
  }

  else if ([testContainer][0] || [1] || [2] || [3] || [4] || [5].value !== arr[0] || arr[1] || arr[2] || arr[3] || arr[4] || arr[5]) {
    document.getElementById("qna").innerHTML = "SOMETHING IS NOT CORRECT FIND THE MISTAKE BY YOURSELF"
  }
  // else if ([testContainer][0] || [1] || [2] || [3] || [4] || [5].value.length == "0") {
  //   return info;
  // }
  // let info = alert("HEY TYPE THE ANSWER IN THE INPUT BOX");
}
