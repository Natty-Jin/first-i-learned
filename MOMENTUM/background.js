const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const choseonImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src =`img/${choseonImage}`;

document.body.appendChild(bgImage);
// appendChild를 넣는 이유는 HTML에서 body문에 배경 화면을 넣어야 하기 때문임.