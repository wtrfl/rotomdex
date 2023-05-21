const modal = document.querySelector('[data-modal]');
const modalopen = document.querySelector('[data-modalopen]');
const modalclose = document.querySelector('[data-modalclose]');

const Types = {
    BUG: "/img/types/bug.png",
    DARK: "/img/types/dark.png",
    DRAGON: "/img/types/dragon.png",
    ELECTRIC: "/img/types/electric.png",
    FAIRY: "/img/types/fairy.png",
    FIGHTING: "/img/types/fighting.png",
    FIRE: "/img/types/fire.png",
    FLYING: "/img/types/flying.png",
    GHOST: "/img/types/ghost.png",
    GRASS: "/img/types/grass.png",
    GROUND: "/img/types/ground.png",
    ICE: "/img/types/ice.png",
    NORMAL: "/img/types/normal.png",
    POISON: "/img/types/poison.png",
    PSYCHIC: "/img/types/psychic.png",
    ROCK: "/img/types/rock.png",
    STEEL: "/img/types/steel.png",
    WATER: "/img/types/water.png",
}

function openModal(name, number, img, type) {
    modal.querySelector('.name').textContent = name;
    modal.querySelector('.number').textContent = number;
    modal.querySelector('.icon').src = img;
    modal.querySelector('.type').src = type;
    modal.classList.remove('hidden');
}

modalopen.addEventListener('click', (e) => {
    openModal("Chimchar", "National Dex #390", "/img/test.png", Types.FIRE);
});

modalclose.addEventListener('click', (e) => {
    modal.classList.add('hidden');
});

