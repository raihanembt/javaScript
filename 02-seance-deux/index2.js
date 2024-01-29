let texte1="OFPPT";
texte1+="";
let texte2="en force";
let texte3=texte1+texte2;
console.log(texte3)

let x=1+1;
let y="5"+1;
console.log(y)

let a=10;
let b="10";
if (a===b)
{
    console.log("les nombres sont egaux")
}else{
    console.log("les nombres ne sont pas egaux")
}

let c=10;
let d="10";
if (a===b)
{
    console.log("les nombres sont egaux")
}else if(c!==d){
    console.log("les nombres ne sont pas egaux")
}

let statut="etudiant";
let age=21;
if(statut=="etudiant" && age==21){
    console.log("okkk")
}else if (statut=="employes"){
    console.log("error")
}

let valide = false;

if (!valide){//false=false
    console.log("ce stagiaire n'est pas inscrit")
}