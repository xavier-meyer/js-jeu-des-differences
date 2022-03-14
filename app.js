// déclaration des erreurs
let ange = document.getElementById("ange");
let fenetre = document.getElementById("fenetre");
let fenetreRose = document.getElementById("fenetrerose");
let flamme = document.getElementById("flamme");
let marican = document.getElementById("marican");
let royalMai = document.getElementById("royal-mai");
let toitBatiment = document.getElementById("toit-batiment");
let troisEtoile = document.getElementById("troisetoile");
//declaration des boutons
let reset = document.getElementById("btn-reset");
let soluce = document.getElementById("btn-soluce");
let help =  document.getElementById("btn-help");
let score = document.getElementById("btn-score");
// liste erreurs
let erreurs = [ange,fenetre,fenetreRose,flamme,marican,royalMai,toitBatiment,troisEtoile];
//decla variables nombres erreurs
let nbError = 0;
let nbErrorMax = erreurs.length;
master();
// fonction global
function master(){
    for(let i = 0; i<erreurs.length; i++){
        erreurs[i].addEventListener("click", function game(){
            erreurs[i].style.opacity = "1";    
            variableStockeur();   
            showNumberErrors();
            this.removeEventListener("click", game);  
            ifVictory();
        });
    }    
}
// fonction reset
function resetErrors(){
    for(let i = 0; i<erreurs.length; i++){
        erreurs[i].style.opacity = "0";
    }
}
// appeler la fonction soluce à l'écoute de l'appui sur bouton reset
reset.addEventListener("click", function(){
    resetErrors();
});
// fonction soluce
function showSoluce(){
    for(let i = 0; i<erreurs.length; i++){
        erreurs[i].style.opacity = "1";
    }    
}    
// appeler la fonction soluce à l'écoute de l'appui sur bouton soluce
soluce.addEventListener("click", function(){
   showSoluce();
});
// fonction help
function helpToFindErrors(){
    for(let i = 0; i<erreurs.length; i++){
        if(!erreurs[i].style.opacity == "1"){
            erreurs[i].style.opacity = "0.3"; 
        }
    }
}
// appeler la fonction help à l'écoute de l'appui sur bouton help
help.addEventListener("click", function(){
    helpToFindErrors();
});
function variableStockeur(){
  nbError++;
}
// fonction afficher le nb d'erreur en html
function showNumberErrors(){
    document.getElementById("counter").innerHTML = nbError;
}
//afficher score total
document.getElementById("counterTotal").innerHTML = nbErrorMax;
// fonction victory
function victory(){     
    let img = document.createElement("img");
    img.src = "./images/feu-artifice.jpg";
    let div = document.getElementById("img-victory");
    div.appendChild(img);
}
// appeller fonction victory si nbErrorMax atteint
function ifVictory(){
    if(nbError == nbErrorMax){
        victory();
    }
}