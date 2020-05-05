const photoA = "https://media.nationalgeographic.org/assets/photos/000/287/28780.jpg"
const photoB = "https://static.boredpanda.com/blog/wp-content/uploads/2020/03/funny-animals-photoshopped-cats-koty-vezde-fb50-png__700.jpg"
let photoC = "https://i.insider.com/5c8045a6d2ce7802a110ce92?width=1100&format=jpeg&auto=webp"
let photoD = "https://i.insider.com/5c79a923eb3ce823662bec14?width=750&format=jpeg&auto=webp"

const pictureChoice = document.querySelector('input[name = "pictureChoice"]');
const pictureLink = document.querySelector('input[name = "pictureLink"]');
const phraseFirst = document.querySelector('input[name = "phraseFirst"]');
const phraseSecond = document.querySelector('input[name = "phraseSecond"]');
const fontColorInput = document.querySelector('input[name ="fontColorChoice"]');
const fontBackgroundInput = document.querySelector('input[name ="fontBackgroundColorChoice"]');
const fontSizeInput = document.querySelector('input[name ="fontSize"]');

const inputBtn = document.querySelector("#submit")

let memeHTMLFormula;
let pictureUse;

//this function takes the inputs and spits out textHTML to build the div that will become the meme
function memeHTMLFormulator(){
    if (pictureLink.value != ""){
        pictureUse = pictureLink.value
    } else if(pictureChoice.value == 'D' || pictureChoice.value == 'd'){
        pictureUse = photoD
    }else if(pictureChoice.value == 'C' || pictureChoice.value == 'c'){
        pictureUse = photoC
    }else if(pictureChoice.value == 'B' || pictureChoice.value == 'b'){
        pictureUse = photoB
    } else{
        pictureUse = photoA
    }
    memeHTMLFormula = (
    "<p class='textFirst' style = 'color: "+fontColorInput.value+"; background-color: "+fontBackgroundInput.value+"; font-size: "+fontSizeInput.value+"px'>"+phraseFirst.value+"</p>"+
    "<p class='textSecond'style = 'color: "+fontColorInput.value+"; background-color: "+fontBackgroundInput.value+"; font-size: "+.75*fontSizeInput.value+"px'>"+phraseSecond.value+"</p>"+
    "<img src='"+pictureUse+"' width = "+window.innerWidth/2+"px>")
    return memeHTMLFormula;
};

//on submit, add the meme ot the page and clear out the forms
inputBtn.addEventListener("click",function(e){
    e.preventDefault();
    
    const memeNew = document.createElement('div');
    memeNew.classList.add('meme');
    
    memeNew.innerHTML = memeHTMLFormulator();
    memeGallery.appendChild(memeNew);

    pictureChoice.value = "";
    pictureLink.value = "";
    phraseFirst.value = "";
    phraseSecond.value = "";
    fontColorInput.value = "#FFFFFF";
    fontBackgroundInput.value = "#101010";
    
});

//on doubleclick - remove the meme that was clicked
memeGallery.addEventListener('dblclick',function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG' || e.target.tagName === 'P'){
        e.target.parentElement.remove();
    }
})
