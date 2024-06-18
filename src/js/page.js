// import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

// console.log(uuidv4())


const  modal = document.getElementById("modal");
const  email = document.getElementById("email-text");
const  linkWhatsapp = document.getElementById("whatsapp");
const  linkInstagram = document.getElementById("instagram");
const  loopImg = document.getElementById("loop-img");
const  footer = document.getElementById("footer");


// const img = [
//   `<img class=" w-full h-56  object-cover bg-center bg-cover mb-4" src="./public/post/p2.jpg" alt="Reformas">`,
//   `<img class=" w-full h-56  object-cover bg-center bg-cover mb-4" src="./public/post/p1.jpg" alt="Reformas">`,
//   `<img class=" w-full h-56  object-cover bg-center bg-cover mb-4" src="./public/post/p4.jpg" alt="Reformas">`,
//   `<img class=" w-full h-56  object-cover bg-center bg-cover mb-4" src="./public/post/p3.jpg" alt="Reformas">`,
//   `<img class=" w-full h-56  object-cover bg-center bg-cover mb-4" src="./public/post/p4.jpg" alt="Reformas">`,
//   `<img class=" w-full h-56  object-cover bg-center bg-cover mb-4" src="./public/post/p1.jpg" alt="Reformas">`,
//   `<img class=" w-full h-56  object-cover bg-center bg-cover mb-4" src="./public/post/p2.jpg" alt="Reformas">`,
//   `<img class=" w-full h-56  object-cover bg-center bg-cover mb-4" src="./public/post/p4.jpg" alt="Reformas">`,
//   `<img class=" w-full h-56  object-cover bg-center bg-cover mb-4" src="./public/post/p1.jpg" alt="Reformas">`,
//   `<img class=" w-full h-56  object-cover bg-center bg-cover mb-4" src="./public/post/p4.jpg" alt="Reformas">`,
//   `<img class=" w-full h-56  object-cover bg-center bg-cover mb-4" src="./public/post/p1.jpg" alt="Reformas">`,
//   `<img class=" w-full h-56  object-cover bg-center bg-cover mb-4" src="./public/post/p4.jpg" alt="Reformas">`,
//   `<img class=" w-full h-56  object-cover bg-center bg-cover mb-4" src="./public/post/p1.jpg" alt="Reformas">`,
  


 
// ] 



// const scrollSpeed = 20; 
// const interval = 100;
// loopImg.innerHTML = img;
// function autoScroll() {
//   let newScroll = loopImg.scrollLeft ;
//   if (newScroll >= loopImg.scrollWidth - loopImg.clientWidth) {
//     loopImg.scrollTo({
//       left: -100 * -100 * -100,
//       behavior: 'auto'
//     });
//   }else{
//     loopImg.scrollTo({
//       left: loopImg.scrollLeft + scrollSpeed,  
//       behavior: 'smooth'
//     });
//   }
// }

// setInterval(autoScroll, interval);





const images = [
  './public/post/p2.jpg',
  './public/post/p1.jpg',
  './public/post/p3.jpg',
  './public/post/p4.jpg',
  './public/post/p2.jpg',
  './public/post/p4.jpg',
  './public/post/p3.jpg',
  './public/post/p3.jpg',
  './public/post/p4.jpg',
  './public/post/p2.jpg',
  './public/post/p4.jpg',
  './public/post/p3.jpg',

,
];


let currentIndex = 0;
images.forEach(imageSrc => {
  const imgElement = document.createElement('img');
  imgElement.className = 'w-full h-56 object-cover bg-center bg-cover mb-4';
  imgElement.src = imageSrc;
  imgElement.alt = 'Reformas';
  loopImg.appendChild(imgElement);
});

const scrollSpeed = 5;
const interval = 100;
function autoScroll() {
  let newScroll = loopImg.scrollLeft + scrollSpeed;
  
  if (newScroll >= loopImg.scrollWidth - loopImg.clientWidth) {
    loopImg.scrollTo({
      left: 0,
      behavior: 'auto'
    });
    currentIndex = 0;
  } else {
    loopImg.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    });
  }
  
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

setInterval(autoScroll, interval);


function Contact() {
  modal.style.visibility = "visible"
  document.title = "ECG - Contatos"
  linkWhatsapp.href = "https://api.whatsapp.com/send?phone=5551999269906&text=Olá gostaria fazer um orçamento!";
  linkInstagram.href = "https://ig.me/m/minhaufop"
};

function Close() {
  modal.style.visibility = "hidden"
  document.title = "ECG - Home"
};


document.getElementById("contact1").addEventListener("click", () => Contact());
document.getElementById("contact2").addEventListener("click", () => Contact());
document.getElementById("email").addEventListener("click", () => {
  email.style.fontSize = "2rem";
  email.innerText = "danilo@danilo.com";
  document.title = "ECG - E-mail"
});

document.getElementById("close").addEventListener("click", () => Close());

const setDate = new Date();
const date = setDate.getFullYear();
const footerText = `Copyright © ${date} ECG Construções e Reformas`;

footer.innerText = footerText;