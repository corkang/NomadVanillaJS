const imgList = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImg = imgList[Math.floor(Math.random()*imgList.length)];

const newImg = document.createElement("img");
newImg.src = `img/${chosenImg}`;
newImg.width= "200";

// document.body.querySelector(".sidebar-b").appendChild(newImg);

document.body.style.backgroundImage =`url(img/${chosenImg})`;