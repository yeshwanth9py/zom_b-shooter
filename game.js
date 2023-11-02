// Iteration 1: Declare variables required for this game
const body = document.getElementById("game-body");
let zombie_id = 1;


// Iteration 1.2: Add shotgun sound

let shotgun_sound = new Audio("assets/shotgun.wav");  //new is related to --oops (classes objects)

body.onclick = ()=>{
    shotgun_sound.pause();
    shotgun_sound.currentTime = 0;
    shotgun_sound.play();
}

// Iteration 1.3: Add background sound
const bgm = new Audio("assets/bgm.mp3");
// bgm.play();
// bgm.loop = true;


// Iteration 1.4: Add lives
let lives = 4;


// Iteration 2: Write a function to make a zombie
function makezomb(){
    body.innerHTML += `<img src='assets/zombie-${getrandomint(1, 6)}.png' class='zombie-image' id='zombie${zombie_id}' />`;
    let currzomb = document.querySelector(`#zombie${zombie_id}`);
    console.log(currzomb);
    currzomb.style.transform = `translateX(${getrandomint(20, 80)}vw)`; 
    currzomb.onclick = ()=>{
        destroy(currzomb)
    }
}

// Iteration 7: Write the helper function to get random integer btw min and max

function getrandomint(min, max){
    //write logic to return a value btw min and max  
    return min + Math.ceil(Math.random()*(max-min))   
}


// Iteration 4: Write a function to destroy a zombie when it is shot or missed
function destroy(zombie){
    zombie.style.display = "none";
    zombie_id++
    makezomb()
}


// Iteration 3: Write a function to check if the player missed a zombie
function check_zombie(zombie){
    console.log(zombie.getBoundingClientRect());
    if(zombie.getBoundingClientRect().top <= 0){
        destroy(zombie);
        // makezomb();
        lives--
        if(lives == 0){
            location.href = "game-over.html"
        }
    }
}

// Iteration 5: Creating timer 

var ct = 60;

setInterval(()=>{
    let timerbox = document.getElementById("timer"); 
    timerbox.innerText = ct;
    ct--
    // check_zombie()
    let currzomb = document.querySelector(`#zombie${zombie_id}`);
    check_zombie(currzomb)
    if(ct == 0){
        //go to win page
        location.href = "win.html"
    }
},1000)



// or

// var ct = 60;
// let timerbox = document.getElementById("timer");
// document.addEventListener("DOMContentLoaded",()=>{  
//     setInterval(()=>{ 
//         timerbox.innerText = ct;
//         ct--
//         console.log(timerbox,ct)
//     },1000)
//   }) 

// setInterval(()=>{
//     document.addEventListener("DOMContentLoaded",()=>{
//         timerbox.innerText = ct;
//         // console.log(timerbox)
//         ct--
//         console.log(ct)
//     })
// },100)

// Iteration 6: Write a code to start the game by calling the first zombie
makezomb()


















//notes
//shotgun_sound.currentTime = 0;
// bgsound.play();
// bgsound.loop = true;
// img == `<img src="assets/${imgarr[2]}"/>
//zombie.style.transform = `translateX(20vw)`
// if (zombie.getBoundingClientRect().top <= 0)