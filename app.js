//document.getElementById("gamu").addEventListener("click", function() {
//    window.location.href = "./about.html";
//})


//Flipbook
let current_page = 1;

function displayPage(){
    document.querySelector('img').src = "./hor_frames/hor_" + current_page + ".png"
    if(current_page===1){
        document.querySelector('#left').style.opacity = '0.5';
        document.querySelector('#left').style.pointerEvents = 'none';
    }else{
        document.querySelector('#left').style.opacity = '1';
        document.querySelector('#left').style.pointerEvents = "auto"
    }

    if(current_page===35){
        document.querySelector('#right').style.opacity = '0.5';
        document.querySelector('#right').style.pointerEvents = 'none';
    }else{
        document.querySelector('#right').style.opacity = '1';
        document.querySelector('#right').style.pointerEvents = "auto"
    }
}

document.querySelector('#left').addEventListener('click', ()=>{
    current_page--;
    displayPage();
    console.log("left")

})

document.querySelector('#right').addEventListener('click', ()=>{
    current_page++;
    displayPage();
    console.log("right")
})

displayPage();

//Flipbook end

//if I change the left/right ids to be different from another
//then the Concept one breaks, but like this
//the Animation one is replaced

//concept Flipbook

let current_pageANI = 1;

function displayPageCONCEPT(){
    document.querySelector('img').src = "./conceptImages/ani" + current_pageANI + ".jpg"
    if(current_pageANI===1){
        document.querySelector('#left').style.opacity = '0.5';
        document.querySelector('#left').style.pointerEvents = 'none';
    }else{
        document.querySelector('#left').style.opacity = '1';
        document.querySelector('#left').style.pointerEvents = "auto"
    }

    if(current_pageANI===3){
        document.querySelector('#right').style.opacity = '0.5';
        document.querySelector('#right').style.pointerEvents = 'none';
    }else{
        document.querySelector('#right').style.opacity = '1';
        document.querySelector('#right').style.pointerEvents = "auto"
    }
}

document.querySelector('#left').addEventListener('click', ()=>{
    current_pageANI--;
    displayPageCONCEPT();
    console.log("left")

})

document.querySelector('#right').addEventListener('click', ()=>{
    current_pageANI++;
    displayPageCONCEPT();
    console.log("right")
})

displayPageCONCEPT();