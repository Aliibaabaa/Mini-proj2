
audio1 = document.getElementById("myAudio1");
audio2 = document.getElementById("myAudio2");

let n1 = Math.floor(Math.random()*100+1);
let n2 = Math.floor(Math.random()*100+1);
 var backbox = document.getElementById("back-box");

document.getElementById("intext").value = n1;
document.getElementById("intext1").value = n2;

let adds = n1 + n2;
var score = 0;
var questions = 0;  
            
  document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
      document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';
         document.getElementById('flip-card-btn-turn-to-back').onclick = function Game(){
         
            document.getElementById('flip-card').classList.toggle('do-flip')
              
            var userSum = document.getElementById("intext2").value;
            
            for(questions = 0; questions <= 3 ; questions++) {
                 
                if (userSum == adds) {
                  audio2.play();
                  document.getElementById("ans").innerHTML = 
                  " Your answer is " + userSum + ". \nWell Done! Your Answer is Correct!";
                      backbox.style.backgroundColor="lightgreen"; 
                      score++;
                      questions++;
              } else if (userSum != adds) {
                audio1.play();
                document.getElementById("ans").innerHTML = 
                "Your answer is incorrect. \n Correct Answer is : " + adds + " . \nTry Again";
                backbox.style.backgroundColor="#fb6868";  
                questions++;
              } 
                // var n1 = document.getElementById("intext").value = "";
                // var  n2 = document.getElementById("intext1").value = "";
                var userSum = document.getElementById("intext2").value = "";
                        n1 = Math.floor((Math.random() * 100) + 1);
                        n2 = Math.floor((Math.random() * 100) + 1);

                        document.getElementById("intext").value = n1;
                        document.getElementById("intext1").value = n2;
                        
                        adds = n1 + n2; 
                        // questions++;
             break;
          } 
          console.log("Your score is: " + score + "out of " + questions)
                        };  //game()

                          document.getElementById('flip-card-btn-turn-to-front').onclick = function() {
                                document.getElementById('flip-card').classList.toggle('do-flip');

                          
                          };

});


  
// let n1 = Math.floor(Math.random()*100+1);
// let n2 = Math.floor(Math.random()*100+1);
//  var backbox = document.getElementById("back-box");

// document.getElementById("intext").value = n1;
// document.getElementById("intext1").value = n2;

// let adds = n1 + n2;


//   document.addEventListener('DOMContentLoaded', function(event) {
//       document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
//       document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';
//          document.getElementById('flip-card-btn-turn-to-back').onclick = function Game(){
         
//         document.getElementById('flip-card').classList.toggle('do-flip')
              
//             var userSum = document.getElementById("intext2").value;
//             var questions = 0;  
//             var score = 0;

              
//                     if( userSum == adds){
//                       document.getElementById("ans").innerHTML = " Your answer is " + userSum + ". Well Done! Your Answer is Correct!";
//                       backbox.style.backgroundColor="lightgreen"; 
//                       score++;
//                     }else{
//                         document.getElementById("ans").innerHTML = "Correct Answer is : " + adds + " . Try Again";
//                         backbox.style.backgroundColor="#fb6868";
//                     } 

//                 // var n1 = document.getElementById("intext").value = "";
//                 // var  n2 = document.getElementById("intext1").value = "";
//                 var userSum = document.getElementById("intext2").value = "";
            
        
//     if(questions <= 5) {       
//       console.log(questions); 
//             n1 = Math.floor((Math.random() * 100) + 1);
//             n2 = Math.floor((Math.random() * 100) + 1);

//             document.getElementById("intext").value = n1;
//             document.getElementById("intext1").value = n2;
            
//             adds = n1 + n2; 
//             questions++;
//           }
//           else {
//             //return score; 
//             document.write(score);
//         }
        
//             };  //game()

//               document.getElementById('flip-card-btn-turn-to-front').onclick = function() {
//                     document.getElementById('flip-card').classList.toggle('do-flip');
//               };

// });







