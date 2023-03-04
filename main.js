var index = 0;




function git(){
     window.location.href=
    "evet.html";
document.getElementsByTagName ("body")[0];

}

function git2(){
    window.location.href=
   "index.html";
document.getElementsByTagName ("body")[0];
}


const kacanBtn = document.getElementById("kacan")

kacanBtn.addEventListener('mouseenter',kacanFonk)

function kacanFonk(){
   let yatay =  Math.random() * 150
   let dikey = Math.random() * 150

    kacanBtn.style.top = `${dikey}px`;
    kacanBtn.style.left = `${yatay}px`
}


function renkDegistir() {
    var body = document.querySelector('body');
    if (body.classList.contains('body-class')) {
      body.classList.replace('body-class', 'ekran');
    } else {
      body.classList.replace('body-class', 'ekran');
    }
  }

