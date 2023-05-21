const modal = document.querySelector('[data-modal]');
const modalopen = document.querySelector('[data-modalopen]');
const modalclose = document.querySelector('[data-modalclose]');

const Types = {
    "BUG": "/img/types/bug.png",
    "DARK": "/img/types/dark.png",
    "DRAGON": "/img/types/dragon.png",
    "ELECTRIC": "/img/types/electric.png",
    "FAIRY": "/img/types/fairy.png",
    "FIGHTING": "/img/types/fighting.png",
    "FIRE": "/img/types/fire.png",
    "FLYING": "/img/types/flying.png",
    "GHOST": "/img/types/ghost.png",
    "GRASS": "/img/types/grass.png",
    "GROUND": "/img/types/ground.png",
    "ICE": "/img/types/ice.png",
    "NORMAL": "/img/types/normal.png",
    "POISON": "/img/types/poison.png",
    "PSYCHIC": "/img/types/psychic.png",
    "ROCK": "/img/types/rock.png",
    "STEEL": "/img/types/steel.png",
    "WATER": "/img/types/water.png",
}

var sampledata = [];

fetch('data/sample.json')
  .then(response => response.json())
  .then(data => {
    sampledata = data.data;

    // kill me right this instant

    const grid = document.querySelector('[data-grid]');

    console.log(sampledata)
    sampledata.forEach((WEIRDO, index) => {
        const e = document.createElement('div');
        e.classList.add('grid-item');

        const img = document.createElement('img');
        const label = document.createElement('span');

        img.src = "img/"+WEIRDO.image;
        label.textContent = WEIRDO.name;

        e.appendChild(img);
        e.appendChild(label);
        
        e.setAttribute('data-open', index);
        grid.appendChild(e);
    })

    const elements = document.querySelectorAll('[data-open]');

    elements.forEach(element => {
    const index = element.getAttribute('data-open');
    element.addEventListener('click', () => {
        openModal(index);
    });
    });
  })
  .catch(error => console.error(error));

function openModal(index) {
    const info = sampledata[index];
    modal.querySelector('.name').textContent = info.name;
    modal.querySelector('.number').textContent = "National Dex #" + info.number;
    modal.querySelector('.icon').src = "img/"+info.image;
    modal.querySelector('.type').src = Types[info.type];
    modal.querySelector('.evolve').textContent = "Evolve Level: "+info.evolve; 
    modal.classList.remove('hidden');
}

modalclose.addEventListener('click', (e) => {
    modal.classList.add('hidden');
});
x
