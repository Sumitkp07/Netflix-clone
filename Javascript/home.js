function turn(){
  document.querySelector('.fa-solid').classList.toggle('turn');
  document.querySelector('.desc').classList.toggle('hide');
}
function turn2(){
  document.getElementsByClassName('.task2')[0].classList.toggle('turn2');
  document.querySelector('.desc2').classList.toggle('hide2');
}
function turn3(){
  document.querySelector('.task3').classList.toggle('turn3');
  document.querySelector('.desc3').classList.toggle('hide3');
}
function turn4(){
  document.querySelector('.task4').classList.toggle('turn4');
  document.querySelector('.desc4').classList.toggle('hide4');
}
function turn5(){
  document.querySelector('.task5').classList.toggle('turn5');
  document.querySelector('.desc5').classList.toggle('hide5');
}
function turn6(){
  document.querySelector('.task6').classList.toggle('turn6');
  document.querySelector('.desc6').classList.toggle('hide6');
}


document.querySelector('.fa-solid').addEventListener("click",turn);
document.querySelector('.task2').addEventListener("click",turn2);
document.querySelector('.task3').addEventListener("click",turn3);
document.querySelector('.task4').addEventListener("click",turn4);
document.querySelector('.task5').addEventListener("click",turn5);
document.querySelector('.task6').addEventListener("click",turn6);





// ================= different bt wrk =================
// function turn(){
//   document.querySelectorAll('.fa-solid').forEach(e =>{
//     e.classList.toggle('turn');
//   })
//   document.querySelectorAll('.desc').forEach(e => {
    
//     e.classList.toggle('hide');
//   });

  
// }

// document.querySelectorAll('.fa-solid').forEach(e => {
// e.addEventListener("click",turn);
// });;