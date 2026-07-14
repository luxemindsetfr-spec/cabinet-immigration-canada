const steps = document.querySelectorAll(".step");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");
const progress = document.getElementById("progressBar");

let current = 0;

function showStep(index){

steps.forEach((step)=>{
step.classList.remove("active");
});

steps[index].classList.add("active");

if(progress){

const percent=((index+1)/steps.length)*100;
progress.style.width=percent+"%";

}

window.scrollTo({
top:0,
behavior:"smooth"
});

}

nextBtns.forEach((btn)=>{

btn.addEventListener("click",()=>{

if(current<steps.length-1){

current++;
showStep(current);

}

});

});

prevBtns.forEach((btn)=>{

btn.addEventListener("click",()=>{

if(current>0){

current--;
showStep(current);

}

});

});

showStep(current);
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = new FormData(form);

    let message = "🇨🇦 *Nouvelle évaluation Immigration Canada*%0A%0A";

    for (const [key, value] of data.entries()) {
      message += `*${key}* : ${value}%0A`;
    }

    const numero = "16135124948";
    const url = `https://wa.me/${numero}?text=${message}`;

    window.open(url, "_blank");
  });
});
