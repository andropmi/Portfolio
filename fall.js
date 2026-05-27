const fallArea =
document.getElementById("fall-area");

const items = [

"images/cherry-icon.png",
"images/cream-icon.png",
"images/pudding-icon.png"

];

const falling = [];

function createItem(){

const img =
document.createElement("img");

img.src =
items[
Math.floor(
Math.random()*3
)
];

img.className =
"fall-item";

img.style.left =
Math.random()*window.innerWidth+"px";

img.dataset.type =
img.src;

fallArea.appendChild(img);

falling.push(img);

}

function checkCollision(){

for(let i=0;i<falling.length;i++){

for(let j=i+1;j<falling.length;j++){

const a=
falling[i];

const b=
falling[j];

if(
!a||!b
) continue;

const r1=
a.getBoundingClientRect();

const r2=
b.getBoundingClientRect();

const hit=

r1.left<r2.right&&
r1.right>r2.left&&
r1.top<r2.bottom&&
r1.bottom>r2.top;

if(
hit&&
a.dataset.type===
b.dataset.type
){

a.remove();
b.remove();

falling.splice(
falling.indexOf(a),
1
);

falling.splice(
falling.indexOf(b),
1
);

}

}

}

}

setInterval(
createItem,
1200
);

setInterval(
checkCollision,
100
);