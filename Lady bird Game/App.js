const bug = document.querySelector('.ladybird');
const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');
const homeBtn = document.querySelector('#home');
const turnClockwiseBtn = document.querySelector('#turnClockWise');
const turnAntiClockwiseBtn = document.querySelector('#turnAntiClockWise');

let xDirection = 0;
let yDirection = 0;
let rotation = 0;

const home = () => {
    xDirection=0;
    yDirection = 0;
    rotation = 0;
    bug.style.left = `${xDirection}px`;
    bug.style.top = `${yDirection}px`;  
    bug.style.transform =`rotate(${rotation}deg)`;
};

const right = () => {
    if(xDirection<450)
        {
            xDirection+=10;
            bug.style.left = `${xDirection}px`;
        }
};

const left = () =>{
    if(xDirection>0)
        {
            xDirection-=10;
            bug.style.left = `${xDirection}px`;
        }
};

const up = () =>{
    if(yDirection>0)
        {
            yDirection-=10;
            bug.style.top = `${yDirection}px`;
        }
};

const down = () =>{
    if(yDirection<450)
        {
            yDirection+=10;
            bug.style.top = `${yDirection}px`;
        }
};

const clock = () => {
    rotation+=90;
    bug.style.transform =`rotate(${rotation}deg)`
};

const antiClock = () => {
    rotation-=90;
    bug.style.transform =`rotate(${rotation}deg)`
};

//keyboard
document.addEventListener('keydown',(event) => {
    event.preventDefault();
    upBtn.style.outline = 'none';
    downBtn.style.outline = 'none';
    rightBtn.style.outline = 'none';
    leftBtn.style.outline = 'none';
    turnClockwiseBtn.style.outline = 'none';
    turnAntiClockwiseBtn.style.outline = 'none';
    homeBtn.style.outline = 'none';

    if (event.code === 'Home' || event.code ==='Escape' || event.code ==='Enter' || event.code ==='Space')
        {
           home();
        }
    if (event.code === 'ArrowRight' || event.code ==='KeyD')
        {
            right();
        }
    if (event.code === 'ArrowLeft' || event.code ==='KeyA')
        {
            left();
        }
    if (event.code === 'ArrowDown' || event.code ==='KeyS' || event.code ==='PageDown')
        {
            down();
        }
    if (event.code === 'ArrowUp' || event.code ==='KeyW' || event.code ==='PageUp')
        {
            up();
        }
    if (event.code === 'ShiftRight')
        {
            clock();
        }
    if (event.code === 'ShiftLeft')
        {
            antiClock();
        }
})

//reset mouse click
homeBtn.addEventListener('click', home);

//Moving towards right --> mouse click
rightBtn.addEventListener('click',right);

//Moving towards left --> mouse click
leftBtn.addEventListener('click',left);

//Moving downwards --> mouse click
downBtn.addEventListener('click',down);

//Moving Upwards --> mouse click
upBtn.addEventListener('click',up);

//rorating clockwice
turnClockwiseBtn.addEventListener('click',clock);

//rorating Anti-Clockwice
turnAntiClockwiseBtn.addEventListener('click', antiClock);