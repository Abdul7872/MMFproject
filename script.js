// pupil movements
let pupils =document.getElementsByClassName("pupil");
let pupilArr = Array.from(pupils)
let pupilStartPoint = -85;
let pupilRange = 160;


// mouse X position
let mouseXStratPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;

//mouse Y position
let mouseYStratPoint = 0;
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

const mouseMove = (event) => {
    currentXPosition = event.clientX;
    fracXValue = currentXPosition / mouseXEndPoint ;

    currentYPosition = event.clientY;
    fracYValue = currentYPosition / mouseYEndPoint;

    let pupilXCurrentPosition =pupilStartPoint + (fracXValue * pupilRange) ;
    let pupilYCurrentPosition =pupilStartPoint + (fracYValue * pupilRange) ;
    pupilArr.forEach((curPupil) =>{
        curPupil.style.transform = `translate(${pupilXCurrentPosition}px, ${pupilYCurrentPosition}px)`; 
    });

}

const windowResize =(event) =>{
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
}

window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);

