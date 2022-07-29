
console.log("hello")

console.log("CLEAR THE TEST");

let timer = 200;
let Examtimer = setInterval(() => {
  document.querySelector('.TESTTIMER').innerHTML = " YOUR EXAM WILL BE OVER IN -: " + timer-- + "s (3:20 s)";
  if (timer == -1) {
    // alert("YOUR TEST IS AUTOMATICALLY SUBMITTED");
    document.querySelector('.YO').innerHTML = "YOUR TEST IS AUTOMATICALLY SUBMITTED"
    clearInterval(Examtimer);
    document.querySelector('.input1').style.display = 'none';

  }

}, 1000);



// to check whether the value writtn is correct or not 
function rdirect() {
  location.replace('http://127.0.0.1:5500/testyself/CheckResult.html');
}

function btn() {
  let arr = ['VELOCITY', 'ANDROECIUM', 'SEPAL', 'OVARY,OVULE', 'ANAEMOPHILY', '4m']
  let testContainer = document.querySelectorAll(".input1");
  document.getElementById("click").style.display = 'block';
  document.querySelector(".input").style.display = 'block';
  let Container = document.querySelectorAll('.testContainer');
  if (testContainer[0].value == "VELOCITY" && testContainer[1].value == "ANDROECIUM" && testContainer[2].value == "SEPAL" && testContainer[3].value == "OVARY,OVULE" && testContainer[4].value == "ANAEMOPHILY" && testContainer[5].value == "4m") {
    document.getElementById("Correct").innerText = 10;
    document.getElementById("click").style.display = 'block';
    document.querySelector(".input").style.display = 'block';

  }

  else if ([testContainer][0] || [1] || [2] || [3] || [4] || [5].value !== arr[0] || arr[1] || arr[2] || arr[3] || arr[4] || arr[5]) {
    document.getElementById("qna").innerHTML = "SOMETHING IS NOT CORRECT FIND THE MISTAKE BY YOURSELF"
    document.getElementById("click").style.display = 'none';
    document.querySelector(".input").style.display = 'none';
  }
  // else if ([testContainer][0] || [1] || [2] || [3] || [4] || [5].value.length == "0") {
  //   return info;
  // }
  // let info = alert("HEY TYPE THE ANSWER IN THE INPUT BOX");
}

function myfunction() {
  let input = document.querySelector('.input');
  let name = [input.value];
  // console.log(name)
  document.getElementById("name").innerHTML = " A NEW STUDENT NAME " + name + " JOINED"

  if (input.value == input.value) {
    document.querySelector(".name").style.display = 'none';
    document.getElementById("click").style.display = 'none'
  }
}
