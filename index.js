

var en=3;
var num2=document.querySelectorAll(".blackkey").length;
for (var i = 0; i < num2; i++)
 {
   document.querySelectorAll(".blackkey")[i].addEventListener("click",function(){

  this.classList.add("blackkey1");
 en=2;
  var t2=this;
  window.setTimeout(function(){
  t2.classList.remove("blackkey1");
 en=3;
}, 200);

 play(this.classList[1],en);
//  animation(this.innerHTML);
  });
 }

var num=document.querySelectorAll(".whitekey").length;
for (var i = 0; i < num; i++)
 {
   document.querySelectorAll(".whitekey")[i].addEventListener("click",function(){
  this.classList.add("whitekey1");
    var t1=this;
  if (en===2){t1.classList.remove("whitekey1");}

  window.setTimeout(function(){
  t1.classList.remove("whitekey1");
}, 200);
 play(this.classList[1] ,en);
});
}


function blackkeyfor(parameter)
 {
   document.querySelector("."+parameter).classList.add("blackkey1");

   en=2;
   window.setTimeout(function(){
   document.querySelector("."+parameter).classList.remove("blackkey1");
   en=3;}, 200);
 }


 function whitekeyfor(parameter2){

document.querySelector("."+parameter2).classList.add("whitekey1");

 if (en===2){document.querySelector("."+parameter2).classList.remove("whitekey1"); }
 window.setTimeout(function(){
 document.querySelector("."+parameter2).classList.remove("whitekey1");
 }, 200);
 }















//////////////////////////////////


var keys1 = ["0","0"]
  var ii=0;

 // Function to handle key press events
 function handleKeyPress(event) {
   // Update key state
   keys1[ii] = event.key;
   ii++;

  if (keys1[0]===keys1[1]){  keys1 = [keys1[1],"0"]; ii=1;  }

   // Check if both "p" and "e" keys are pressed together
   if (keys1[0]!=="0" && keys1[1]!=="0" ) {
     var enterkey="a"+keys1[0]+keys1[1];
     play(enterkey , 3)
   ii=0;
     // Your code to handle the event goes here
   }
 }

 // Function to handle key release events
 function handleKeyRelease(event) {
   // Update key state
   if (keys1[0]!=="0" && keys1[1]!=="0") {
    keys1[1]="0";
     ii=1;
     // Your code to handle the event goes here
      }
else {  keys1 = ["0","0"];
        ii=0;
     }



 }

 // Attach the event listeners to the document
 document.addEventListener('keydown', handleKeyPress);
 document.addEventListener('keyup', handleKeyRelease);

/////////////////////////////



 function play(key , check){

   switch (key) {
     case "a1z":
           if(check===3){
                  var audio= new Audio("sounds/1.mp3");
                  audio.play();
                       }
          whitekeyfor(key);
/*
                          document.querySelector("."+key).classList.add("whitekey1");

                       if (en===2){("."+key).classList.remove("whitekey1");}

                  window.setTimeout(function(){  document.querySelector("."+key).classList.remove("whitekey1");}, 200);
*/



    break;

    case "a1s": var audio= new Audio("sounds/2.mp3");audio.play();
    blackkeyfor(key);
/*

    document.querySelector("."+key).classList.add("blackkey1");
   en=2;

    window.setTimeout(function(){  document.querySelector("."+key).classList.remove("blackkey1"); en=3; }, 200);

*/







     break;

    case "a1x":
           if(check===3){
                  var audio= new Audio("sounds/3.mp3");
                  audio.play();
                       }
          whitekeyfor(key);
    break;

   case "a1d": var audio= new Audio("sounds/4.mp3");audio.play();blackkeyfor(key); break;

   case "a1c": var audio= new Audio("sounds/5.mp3");audio.play();whitekeyfor(key); break;

   case "a1v":
          if(check===3){
                 var audio= new Audio("sounds/6.mp3");
                 audio.play();
                      }
        whitekeyfor(key);
   break;

  case "a1g": var audio= new Audio("sounds/7.mp3");audio.play();blackkeyfor(key); break;

  case "a1b":
         if(check===3){
                var audio= new Audio("sounds/8.mp3");
                audio.play();
               }
        whitekeyfor(key);
         break;
  case "a1h": var audio= new Audio("sounds/9.mp3");audio.play();blackkeyfor(key); break;

  case "a1n":
         if(check===3){
                var audio= new Audio("sounds/10.mp3");
                audio.play();
               }
          whitekeyfor(key);
         break;

  case "a1j": var audio= new Audio("sounds/11.mp3");audio.play();blackkeyfor(key); break;
  case "a1m": var audio= new Audio("sounds/12.mp3");audio.play();whitekeyfor(key); break;

  case "a2z":
         if(check===3){
                var audio= new Audio("sounds/13.mp3");
                audio.play();
               }
          whitekeyfor(key);
         break;

  case "a2s": var audio= new Audio("sounds/14.mp3");audio.play();blackkeyfor(key); break;

  case "a2x":
         if(check===3){
                var audio= new Audio("sounds/15.mp3");
                audio.play();
               }
        whitekeyfor(key);
         break;

  case "a2d": var audio= new Audio("sounds/16.mp3");audio.play();blackkeyfor(key); break;
  case "a2c": var audio= new Audio("sounds/17.mp3");audio.play();whitekeyfor(key); break;

  case "a2v":
         if(check===3){
                var audio= new Audio("sounds/18.mp3");
                audio.play();
               }
        whitekeyfor(key);
         break;

  case "a2g": var audio= new Audio("sounds/19.mp3");audio.play();blackkeyfor(key); break;

  case "a2b":
         if(check===3){
                var audio= new Audio("sounds/20.mp3");
                audio.play();
               }
        whitekeyfor(key);
         break;

  case "a2h": var audio= new Audio("sounds/21.mp3");audio.play();blackkeyfor(key); break;

  case "a2n":
         if(check===3){
                var audio= new Audio("sounds/22.mp3");
                audio.play();
               }
          whitekeyfor(key);
         break;

  case "a2j": var audio= new Audio("sounds/23.mp3");audio.play();blackkeyfor(key); break;
  case "a2m": var audio= new Audio("sounds/24.mp3");audio.play();whitekeyfor(key); break;

  case "a3z":
         if(check===3){
                var audio= new Audio("sounds/25.mp3");
                audio.play();
               }
          whitekeyfor(key);
         break;

  case "a3s": var audio= new Audio("sounds/26.mp3");audio.play();blackkeyfor(key); break;

  case "a3x":
         if(check===3){
                var audio= new Audio("sounds/27.mp3");
                audio.play();
               }
          whitekeyfor(key);
         break;

  case "a3d": var audio= new Audio("sounds/28.mp3");audio.play();blackkeyfor(key); break;

  case "a3c": var audio= new Audio("sounds/29.mp3");audio.play();whitekeyfor(key); break;

  case "a3v":
         if(check===3){
                var audio= new Audio("sounds/30.mp3");
                audio.play();
               }
          whitekeyfor(key);
         break;

  case "a3g": var audio= new Audio("sounds/31.mp3");audio.play();blackkeyfor(key); break;

  case "a3b":
         if(check===3){
                var audio= new Audio("sounds/32.mp3");
                audio.play();
               }
          whitekeyfor(key);
         break;

  case "a3h": var audio= new Audio("sounds/33.mp3");audio.play();blackkeyfor(key); break;

  case "a3n":
         if(check===3){
                var audio= new Audio("sounds/34.mp3");
                audio.play();
               }
          whitekeyfor(key);
         break;

  case "a3j": var audio= new Audio("sounds/35.mp3");audio.play();blackkeyfor(key); break;
  case "a3m": var audio= new Audio("sounds/36.mp3");audio.play();whitekeyfor(key); break;

     default:console.log(key);
           }
   }
lin();
function lin(){
             document.querySelector(".lin2").classList.remove("hide");
             document.querySelector(".lin").classList.add("hide");
             window.setTimeout(function(){lin2()}, 5000);
              }

function lin2(){
                document.querySelector(".lin").classList.remove("hide");
                document.querySelector(".lin2").classList.add("hide");
                window.setTimeout(function(){lin()}, 5000);
              }

//////////////for game//////////////////////////

//document.querySelector(".startgame").addEventListener("click",gam);
 document.addEventListener('keydown',function(event){ if (event.key==="a" || event.key==="A" ){gam();
   var audiog= new Audio("sounds/dice.mp3");
   audiog.play();

 } } );
document.querySelector(".start").addEventListener("click",function(){

this.classList.add("start1");

var t22=this;
window.setTimeout(function(){t22.classList.remove("start1");}, 200);

var audiog= new Audio("sounds/dice.mp3");
audiog.play();

gam();
//  animation(this.innerHTML);
});


document.querySelector(".dice1game").classList.add("whitegame");
document.querySelector(".dice3game").classList.add("whitegame");
document.querySelector(".dice4game").classList.add("whitegame");
document.querySelector(".dice6game").classList.add("whitegame");
document.querySelector(".dice7game").classList.add("whitegame");
document.querySelector(".dice9game").classList.add("whitegame");
document.querySelector(".dice12game").classList.add("whitegame");
document.querySelector(".dice32game").classList.add("whitegame");
document.querySelector(".dice42game").classList.add("whitegame");
document.querySelector(".dice62game").classList.add("whitegame");
document.querySelector(".dice72game").classList.add("whitegame");
document.querySelector(".dice92game").classList.add("whitegame");



function gam(){
var p1=(Math.floor(Math.random()*6))+1;
var p2=(Math.floor(Math.random()*6))+1;
if(p1>p2){document.querySelector(".fontgame").innerHTML="&#128681Player 1 wins! ";}
if(p2>p1){document.querySelector(".fontgame").innerHTML="Player 2 wins!&#128681";}
if(p2===p1){document.querySelector(".fontgame").innerHTML="draw!";}

document.querySelector(".dice1game").classList.remove("whitegame");
document.querySelector(".dice2game").classList.remove("whitegame");
document.querySelector(".dice3game").classList.remove("whitegame");
document.querySelector(".dice4game").classList.remove("whitegame");
document.querySelector(".dice5game").classList.remove("whitegame");
document.querySelector(".dice6game").classList.remove("whitegame");
document.querySelector(".dice7game").classList.remove("whitegame");
document.querySelector(".dice8game").classList.remove("whitegame");
document.querySelector(".dice9game").classList.remove("whitegame");

document.querySelector(".dice12game").classList.remove("whitegame");
document.querySelector(".dice22game").classList.remove("whitegame");
document.querySelector(".dice32game").classList.remove("whitegame");
document.querySelector(".dice42game").classList.remove("whitegame");
document.querySelector(".dice52game").classList.remove("whitegame");
document.querySelector(".dice62game").classList.remove("whitegame");
document.querySelector(".dice72game").classList.remove("whitegame");
document.querySelector(".dice82game").classList.remove("whitegame");
document.querySelector(".dice92game").classList.remove("whitegame");





if (p1===1){document.querySelector(".dice5game").classList.add("whitegame");}
if (p1===2){document.querySelector(".dice1game").classList.add("whitegame");
            document.querySelector(".dice9game").classList.add("whitegame");
            }
if (p1===3){document.querySelector(".dice1game").classList.add("whitegame");
            document.querySelector(".dice5game").classList.add("whitegame");
            document.querySelector(".dice9game").classList.add("whitegame");
           }
if (p1===4){document.querySelector(".dice1game").classList.add("whitegame");
            document.querySelector(".dice3game").classList.add("whitegame");
            document.querySelector(".dice7game").classList.add("whitegame");
            document.querySelector(".dice9game").classList.add("whitegame");
            }
if (p1===5){document.querySelector(".dice1game").classList.add("whitegame");
            document.querySelector(".dice3game").classList.add("whitegame");
            document.querySelector(".dice5game").classList.add("whitegame");
            document.querySelector(".dice7game").classList.add("whitegame");
            document.querySelector(".dice9game").classList.add("whitegame");
            }
if (p1===6){document.querySelector(".dice1game").classList.add("whitegame");
            document.querySelector(".dice3game").classList.add("whitegame");
            document.querySelector(".dice4game").classList.add("whitegame");
            document.querySelector(".dice6game").classList.add("whitegame");
            document.querySelector(".dice7game").classList.add("whitegame");
            document.querySelector(".dice9game").classList.add("whitegame");
                        }


 if (p2===1){document.querySelector(".dice52game").classList.add("whitegame");}
 if (p2===2){document.querySelector(".dice12game").classList.add("whitegame");
            document.querySelector(".dice92game").classList.add("whitegame");
           }
 if (p2===3){document.querySelector(".dice12game").classList.add("whitegame");
            document.querySelector(".dice52game").classList.add("whitegame");
            document.querySelector(".dice92game").classList.add("whitegame");
           }
 if (p2===4){document.querySelector(".dice12game").classList.add("whitegame");
            document.querySelector(".dice32game").classList.add("whitegame");
            document.querySelector(".dice72game").classList.add("whitegame");
            document.querySelector(".dice92game").classList.add("whitegame");
            }
 if (p2===5){document.querySelector(".dice12game").classList.add("whitegame");
            document.querySelector(".dice32game").classList.add("whitegame");
            document.querySelector(".dice52game").classList.add("whitegame");
            document.querySelector(".dice72game").classList.add("whitegame");
            document.querySelector(".dice92game").classList.add("whitegame");
              }
 if (p2===6){document.querySelector(".dice12game").classList.add("whitegame");
            document.querySelector(".dice32game").classList.add("whitegame");
            document.querySelector(".dice42game").classList.add("whitegame");
            document.querySelector(".dice62game").classList.add("whitegame");
            document.querySelector(".dice72game").classList.add("whitegame");
            document.querySelector(".dice92game").classList.add("whitegame");
           }
}
/////////////////////////contact icon/////////////////////
var num2=document.querySelectorAll(".select").length;
for (var i = 0; i < num2; i++)
 {
   document.querySelectorAll(".select")[i].addEventListener("click",function(){
      var show1=document.querySelector(".phide");
      var show2 = window.getComputedStyle(show1);
      var ccc = show2.getPropertyValue('display');
     if (ccc==="none")
     {
        document.querySelector(".hiddenlogo").classList.add("visable");
        window.setTimeout(function(){
        document.querySelector(".hiddenlogo").classList.remove("visable");
      
        }, 10000);
      }
  });
 }