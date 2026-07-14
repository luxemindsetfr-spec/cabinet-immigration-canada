const steps = document.querySelectorAll(".step");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");
const progress = document.getElementById("progressBar");

let current = 0;

function showStep(index){
  steps.forEach(step => step.classList.remove("active"));
  steps[index].classList.add("active");

  if(progress){
    progress.style.width = (((index+1)/steps.length)*100) + "%";
  }

  window.scrollTo({top:0,behavior:"smooth"});
}

nextBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{

    const activeStep = steps[current];
    const required = activeStep.querySelectorAll("input[required],select[required],textarea[required]");

    let ok = true;

    required.forEach(field=>{
      if(field.value.trim()===""){
        ok=false;
        field.style.border="2px solid red";
      }else{
        field.style.border="";
      }
    });

    if(!ok){
      alert("Veuillez remplir tous les champs avant de continuer.");
      return;
    }

    if(current<steps.length-1){
      current++;
      showStep(current);
    }

  });
});

prevBtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    if(current>0){
      current--;
      showStep(current);
    }
  });
});

showStep(current);

document.addEventListener("DOMContentLoaded",()=>{

const form=document.getElementById("evaluationForm");
if(!form) return;

form.addEventListener("submit",function(e){

e.preventDefault();

const d=new FormData(form);

let msg="🇨🇦 *Nouvelle évaluation Immigration Canada*%0A%0A";

msg+="👤 Nom : "+(d.get("nom")||"")+"%0A";
msg+="🎂 Âge : "+(d.get("age")||"")+"%0A";
msg+="🌍 Nationalité : "+(d.get("nationalite")||"")+"%0A";
msg+="📍 Pays : "+(d.get("pays")||"")+"%0A";
msg+="🏙️ Ville : "+(d.get("ville")||"")+"%0A";
msg+="📞 Téléphone : "+(d.get("telephone")||"")+"%0A";
msg+="📧 Email : "+(d.get("email")||"")+"%0A";
msg+="🎓 Niveau d'études : "+(d.get("niveau_etudes")||"")+"%0A";
msg+="📜 Diplôme : "+(d.get("diplome")||"")+"%0A";
msg+="🗣️ Français : "+(d.get("francais")||"")+"%0A";
msg+="🇬🇧 Anglais : "+(d.get("anglais")||"")+"%0A";
msg+="💼 Profession : "+(d.get("profession")||"")+"%0A";
msg+="🛠️ Expérience : "+(d.get("experience")||"")+" ans%0A";
msg+="👨‍👩‍👧 Situation familiale : "+(d.get("situation_familiale")||"")+"%0A";
msg+="👶 Enfants : "+(d.get("enfants")||"")+"%0A";
msg+="📘 Passeport : "+(d.get("passeport")||"")+"%0A";
msg+="🛂 Programme : "+(d.get("programme")||"")+"%0A";
msg+="🏛️ Province : "+(d.get("province")||"")+"%0A";
msg+="🏙️ Ville souhaitée : "+(d.get("ville_souhaitee")||"")+"%0A";
msg+="📝 Projet : "+(d.get("projet")||"");

const numero="16135124948";

window.location.href="https://wa.me/"+numero+"?text="+msg;

});

});
