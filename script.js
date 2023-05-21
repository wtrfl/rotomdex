const modal = document.querySelector('[data-modal]');
const modalopen = document.querySelector('[data-modalopen]');
const modalclose = document.querySelector('[data-modalclose]');

function getTypeImg(type) {
    return "type.png";
}

function openModal(name, number, img, type) {
    modal.querySelector('.name').textContent = name;
    modal.querySelector('.number').textContent = number;
    modal.querySelector('.icon').src = img;
    modal.querySelector('.type').src = getTypeImg(type);
    modal.classList.remove('hidden');
}

modalopen.addEventListener('click', (e) => {
    openModal("Chimchar", "National Dex #390", "test.png", 0);
});

modalclose.addEventListener('click', (e) => {
    modal.classList.add('hidden');
});

