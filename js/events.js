console.log("This is js file");


//<button onclick="console.log(65)">Click Me shiam</button>

//        option:1 Best ways
function makeRed(){
    document.body.style.backgroundColor = 'red';
}


//        option:2
const makeBlueButton = document.getElementById('make-blue');
        makeBlueButton.onclick = makeBlue;
        

        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }


//        option:3
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurplr(){
    document.body.style.backgroundColor = 'purple';
}


//        option:4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink)

function makePink(){
    document.body.style.backgroundColor = 'pink';
}
