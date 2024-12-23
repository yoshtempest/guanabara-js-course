const body = document.body;

const moduleC = document.createElement('div');
moduleC.className = 'module-c';

const heading = document.createElement('h1');
heading.textContent = 'Module C - DOM';

const paragraph = document.createElement('p');
paragraph.textContent = 'Dom = Document Object Model'

const buttonWhatIsDom = document.createElement('button');
buttonWhatIsDom.textContent = 'What is the DOM?';
buttonWhatIsDom.onclick = () => {
    alert('Dom is basically a set of objects inside your browser that will give access to the internal components of your website.');
}

const domTreeHeading = document.createElement('h2');
domTreeHeading.textContent = 'DOM Tree';

const buttonDomTree = document.createElement('button');
buttonDomTree.textContent = 'What do you mean by DOM tree?';
buttonDomTree.onclick = () => {
    alert('The DOM tree basically starts at the root(window), with everything JavaScript inside it.')
}
const elementSelectorsHeading = document.createElement('h2')
elementSelectorsHeading.textContent = 'Element Selectors';

const paragraphAboutWays = document.createElement('p');
paragraphAboutWays.textContent = 'there are 5 ways to select one or more elements';

const overlay = document.createElement('div');
overlay.className = 'overlay';

const modal = document.createElement('div');
modal.className = 'modal';

const modalImage = document.createElement('img')
modalImage.src = '../images/ways-to-select.png';

const closeModal = document.createElement('button');
closeModal.textContent = 'Close';

const buttonShowWays = document.createElement('button');
buttonShowWays.textContent = 'Show me';
buttonShowWays.onclick = () => {
    modal.style.display = 'block';
    overlay.style.display = 'block';
}
closeModal.onclick = () => {
    overlay.style.display = 'none';
    modal.style.display = 'none';
}
overlay.onclick = () => {
    overlay.style.display = 'none';
    modal.style.display = 'none';
};

modal.appendChild(modalImage);
modal.appendChild(closeModal);

moduleC.appendChild(heading);
moduleC.appendChild(paragraph);
moduleC.appendChild(buttonWhatIsDom);
moduleC.appendChild(domTreeHeading);
moduleC.appendChild(buttonDomTree);
moduleC.appendChild(elementSelectorsHeading);
moduleC.appendChild(paragraphAboutWays);
moduleC.appendChild(buttonShowWays);
moduleC.appendChild(overlay);
moduleC.appendChild(modal);


body.appendChild(moduleC);
