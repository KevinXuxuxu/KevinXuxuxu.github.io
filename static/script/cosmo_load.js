import init, { PlayerWASM } from '/static/wasm/cosmo/cosmo.js';
await init();
async function readScene(id) {
    try {
        console.log('debug: 5')
        const response = await fetch('/static/cosmo_scenes/' + id + '.cos');
        if (!response.ok) {
            console.log('debug: 8')
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        console.log('debug: 12')
        return text.split('\n').map(line => line.trim());
    } catch (error) {
        console.log('debug: 15')
        console.error('Error fetching or reading the text file:', error);
    }
}
async function prepareCosmo(displayEle) {
    console.log('debug: 20')
    let [id, w, h] = displayEle.id.split('-');
    const scene = await readScene(id);
    console.log('debug: 23')
    const player = PlayerWASM.new(scene, 24, parseInt(w), parseInt(h), false, false, false);
    console.log('debug: 25')
    player.update();
    displayEle.textContent = player.get_a().join('\n');
    console.log('debug: 28')
    displayEle.addEventListener('click', () => {
        if (displayEle.hasAttribute('intId')) {
            clearInterval(displayEle.getAttribute('intId'));
            displayEle.removeAttribute('intId');
        } else {
            const intId = setInterval(() => {
                player.update();
                displayEle.textContent = player.get_a().join('\n');
            }, 1000.0 / 24.0);
            displayEle.setAttribute('intId', intId);
        }
    });
}

window.onload = function () {
    console.log('debug: 44')
    let displayEles = document.getElementsByClassName('cosmo-display');
    for (let i = 0; i < displayEles.length; ++i) {
        console.log('debug: 47')
        prepareCosmo(displayEles[i]);
    }
};