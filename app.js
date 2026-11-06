//document.getElementById("gamu").addEventListener("click", function() {
//    window.location.href = "./about.html";
//})


//Flipbook for vam
let current_pageANI = 3;

function displayPageANI(){
    const vamIMG = document.getElementById("vam");
    if (vamIMG) {
        vamIMG.src = "./vam_frames/vam_" + current_pageANI + ".png"
        if(current_pageANI===3){
            document.getElementById('leftANI').style.opacity = '0.75';
            document.getElementById('leftANI').style.pointerEvents = 'none';
        }else{
            document.getElementById('leftANI').style.opacity = '1';
            document.getElementById('leftANI').style.pointerEvents = "auto"
        }

        if(current_pageANI===1){
            document.getElementById('rightANI').style.opacity = '0.75';
            document.getElementById('rightANI').style.pointerEvents = 'none';
        }else{
            document.getElementById('rightANI').style.opacity = '1';
            document.getElementById('rightANI').style.pointerEvents = "auto"
        }
    }
}

document.getElementById('leftANI')?.addEventListener('click', ()=>{
    current_pageANI++;
    displayPageANI();
    //console.log(current_pageANI)

})

document.getElementById('rightANI')?.addEventListener('click', ()=>{
    current_pageANI--;
    displayPageANI();
    //console.log(current_pageANI)
})

displayPageANI();

//the issue was that the js was running on all pages and couldn't find the elements too what was on the page
//it was giving an error because it needed to find the elements that it didn't have, putting the if/else
//statement and "?" made it so that it scans once and if it can't find it, then it doesn't worry about it

//concept Flipbook

let current_pageCON = 3;


function displayPageCONCEPT(){
    const conIMG = document.getElementById("draftsmanship");
    if (conIMG) {
        conIMG.src = "./drtmshp/ani" + current_pageCON + ".jpg"

        if(current_pageCON===3){
            document.getElementById('leftCON').style.opacity = '0.75';
            document.getElementById('leftCON').style.pointerEvents = 'none';
        }else{
            document.getElementById('leftCON').style.opacity = '1';
            document.getElementById('leftCON').style.pointerEvents = "auto"
        }

        if(current_pageANI===1){
            document.getElementById('rightCON').style.opacity = '0.75';
            document.getElementById('rightCON').style.pointerEvents = 'none';
        }else{
            document.getElementById('rightCON').style.opacity = '1';
            document.getElementById('rightCON').style.pointerEvents = "auto"
        }
        //console.log(current_pageCON + "if")
    }
}
console.log(current_pageCON);

document.getElementById('leftCON')?.addEventListener('click', ()=>{
    current_pageCON++;
    displayPageCONCEPT();
    console.log(current_pageCON + " " + "plus1_Left")

})

document.getElementById('rightCON')?.addEventListener('click', ()=>{
    current_pageCON--;
    displayPageCONCEPT();
    console.log(current_pageCON + " " + "minus1_Right")
})

displayPageCONCEPT();