// const title = document.getElementById('ecriretexte');
// text = "'L'information est l'Oxygène des temps modernes...'";

// index = 0;
// const randomSpeed = (min, max) =>{
//     return Math.floor(Math.random()*(max-min)+min);
// };
// const play =()=> {
//     title.innerHTML = text.slice(0,index);
//     index++;
//     if(index> text.length){
//         index=0
//     }
//     clearInterval(timer);
//     timer= setInterval(play, randomSpeed(20, 450));
// };

// let timer= setInterval(play, 100);

const title = document.getElementById('ecriretexte');
const text = ["L'information est l'Oxygène des temps modernes", "En effet, depuis l'année 2005...","l'humanité a connu une forte croissance", "en terme des données receuillis", "pour comprendre cela, je vais vous décrire quelque chose:", "depuis le début de l'histoire de l'humanité j'usqu'en 2005", "une quantité des données estimées à environ 135 Exabytes existait déjà", "selon IDC(international Data Corporation),", "l'année suivante(2006), avec la croissance et la montée des réseaux", "un Total de 161 Exabytes des données ont été receuillis", "en 2010, nous avons dépassé les 1200 Exabytes des données", "en 2015 nous sommes passées à 7900 exabytes des données", "en 2020, 40.000 exabytes étaient prévus...", "avec tous ces détails...", "comprenez-vous alors","la croissance de ce domaine appelé: 'le Big Data' ??"];
// const title2 = document.getElementById('partenaires');
// const text2 = ["METANOIA FM", "GROUPE MILIMA","FOI EN ACTION", "FANTASTIC GROUP", "CCM", "SYMUF", "SAVOIRBUSINESS"];
let timer = setInterval(() => {
    typingEffect(text, title);
    // typingEffect(text2, title2);
}, 500);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min+1) + min);
}

/**
 * @function typingEffect
 * @description Permet de faire un effet de texte qui s'écrit
 * @param {Array<String>} textArray  
 * @param {HTMLElement} htmlElement 
 */
async function typingEffect(textArray, htmlElement, indexString = 0, indexArray = 0) {
    htmlElement.innerHTML = textArray[indexArray].slice(0, indexString);
    indexString++;
    if(indexString > textArray[indexArray].length) {
        indexString = 0;
        indexArray++;
        await new Promise(r => setTimeout(r, 1000)); // Permet d'attendre (sleep)
        if(indexArray >= textArray.length) {
            indexArray = 0;
        }
    }
    clearInterval(timer);
    timer = setInterval(() => {
        typingEffect(textArray, htmlElement, indexString, indexArray);
    }, randomNumber(50, 200));
};

// CUSTOMISED CURSOR
let mouseCursor = document.querySelector('.cursor');
window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
};

// CURSOR GROWING
let navLinks = document.querySelectorAll('.nav-links li');

navLinks.forEach(link =>{
    link.addEventListener('mouseover',()=>{
        mouseCursor.classList.add('.link-grow');
        link.classList.add('.hovered-link');
    });
    link.addEventListener('mouseleave',()=>{
        mouseCursor.classList.remove('.link-grow');
        link.classList.remove('.hovered-link');
    });
});
