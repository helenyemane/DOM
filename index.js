
document.body.style.backgroundColor = "rgb(100, 151, 80)";


document.getElementById("title").style.color = "green";

let h3title = document.getElementsByTagName("h3");
for (let i = 0; i < h3title.length; i++) {
    h3title[i].style.textTransform = "uppercase";
}

const fruitList = document.getElementById("fruList");
const newFruit = document.createElement("li");
newFruit.textContent = "Oranges";
fruitList.appendChild(newFruit);


const vegList = document.getElementById("vegList");
const newVeg = document.createElement("li");
newVeg.textContent = "Spinach";
vegList.appendChild(newVeg);

function imageAdd(listItem, imagePath) {
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = listItem.textContent;
    img.style.width = '200px';
    img.style.height = '200px';
    listItem.insertBefore(img, listItem.firstChild);
}
const fruitItems = document.querySelectorAll("#fruList li");
const vegItems = document.querySelectorAll("#vegList li");
 imageAdd(fruitItems[0], "pic/mangoes.jpg");
 imageAdd(fruitItems[1], "pic/bananass.jpg");
 imageAdd(fruitItems[2], "pic/water melon.jpg");
 imageAdd(fruitItems[3], "pic/oranges.jpg");
 imageAdd(vegItems[0], "pic/onionss.jpg");
 imageAdd(vegItems[1], "pic/tomatoes.jpg");
 imageAdd(vegItems[2], "pic/kales.jpg");
 imageAdd(vegItems[3], "pic/broccoli.jpg");
