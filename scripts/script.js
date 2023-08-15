let totalClicks = 0;
let maxRange = 0;
let totalResets = 0;
let runClicks = 0;

const gameButton = document.getElementById("theGameButton");
gameButton.addEventListener("click", buttonClicks);
gameButton.addEventListener("click", resetChance);

function buttonClicks(){
    
    totalClicks +=1;
    runClicks += 1;
    document.getElementById("totalClicks").innerHTML = "TOTAL DE CLICKS: " + totalClicks;

    if(runClicks > maxRange){
        maxRange = runClicks;
    }

}

function resetChance(){

    let number = Math.floor(Math.random() * 101);
    
    if(runClicks >= number){
        runClicks = 0;
        totalResets += 1;
    }
    
    document.getElementById("highRange").innerHTML = "ALCANCE MÁXIMO: " + maxRange;
    document.getElementById("totalClicks").innerHTML = "TOTAL DE CLICKS: " + totalClicks;
    document.getElementById("totalResets").innerHTML = "TOTAL DE RESETS: " + totalResets;
    document.getElementById("textButton").innerHTML = runClicks;
}