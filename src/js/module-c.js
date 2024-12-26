const body = document.body;

const moduleC = document.createElement('div');
moduleC.className = 'module-c';

const heading = document.createElement('h1');
heading.textContent = 'Module C - DOM';

const paragraph = document.createElement('p');
paragraph.textContent = 'Dom = Document Object Model'

const buttonWhatIsDom = document.createElement('button');
buttonWhatIsDom.textContent = 'What is the DOM?';
buttonWhatIsDom.style.backgroundColor = 'cyan';
buttonWhatIsDom.style.borderRadius = '50px';
buttonWhatIsDom.style.cursor = 'pointer';
buttonWhatIsDom.onclick = () =>
{
    alert('Dom is basically a set of objects inside your browser that will give access to the internal components of your website.');
}

const domTreeHeading = document.createElement('h2');
domTreeHeading.textContent = 'DOM Tree';

const buttonDomTree = document.createElement('button');
buttonDomTree.textContent = 'What do you mean by DOM tree?';
buttonDomTree.style.backgroundColor = 'cyan';
buttonDomTree.style.borderRadius = '50px';
buttonDomTree.style.cursor = 'pointer';
buttonDomTree.onclick = () =>
{
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
modal.style.backgroundColor = 'gray';
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.top = '50%';
modal.style.left = '50%';

const modalImage = document.createElement('img')
modalImage.src = '../images/ways-to-select.png';

const closeModal = document.createElement('button');
closeModal.textContent = 'Close';
closeModal.style.position = 'relative';
closeModal.style.right = '40px';
closeModal.style.top = '0px';
closeModal.style.width = '40px';
closeModal.style.height = '25px';
closeModal.style.backgroundColor = 'red';
closeModal.style.borderRadius = '10px';
closeModal.style.cursor = 'pointer';
closeModal.style.borderColor = 'red';

const buttonShowWays = document.createElement('button');
buttonShowWays.textContent = 'Show me';
buttonShowWays.style.backgroundColor = 'cyan';
buttonShowWays.style.borderRadius = '50px';
buttonShowWays.style.cursor = 'pointer';

buttonShowWays.onclick = () =>
{
    modal.style.display = 'flex';
    overlay.style.display = 'flex';
}
closeModal.onclick = () =>
{
    overlay.style.display = 'none';
    modal.style.display = 'none';
}
overlay.onclick = () =>
{
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
