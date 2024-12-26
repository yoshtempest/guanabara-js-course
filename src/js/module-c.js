const body = document.body;

const moduleC = document.createElement('div');
moduleC.id = 'moduleC';

const heading = document.createElement('h1');
heading.textContent = 'Module C - DOM';

const meaningOfDom = document.createElement('p');
meaningOfDom.textContent = 'Dom = Document Object Model'

const buttonWhatIsDom = document.createElement('button');
buttonWhatIsDom.textContent = 'What is the DOM?';
buttonWhatIsDom.onclick = () =>
{
    alert('Dom is basically a set of objects inside your browser that will give access to the internal components of your website.');
}

// DOM Tree
const domTree = document.createElement('div');
domTree.className = 'domTree';

const domTreeHeading = document.createElement('h2');
domTreeHeading.textContent = 'DOM Tree';

const buttonDomTree = document.createElement('button');
buttonDomTree.textContent = 'What do you mean by DOM tree?';
buttonDomTree.onclick = () =>
{
    alert('The DOM tree basically starts at the root(window), with everything JavaScript inside it.')
}

// Element Selectors
const elementSelectors = document.createElement('div');
elementSelectors.className = 'elementSelectors';

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
closeModal.id = 'closeModal';
closeModal.textContent = 'Close';
closeModal.style.position = 'relative';
closeModal.style.right = '-300px';
closeModal.style.top = '-220px';
closeModal.style.width = '40px';
closeModal.style.height = '25px';
closeModal.style.backgroundColor = 'red';
closeModal.style.borderRadius = '10px';
closeModal.style.cursor = 'pointer';
closeModal.style.borderColor = 'red';

const buttonShowWays = document.createElement('button');
buttonShowWays.textContent = 'Show me';

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

// DOM Events
const domEvents = document.createElement('div');
domEvents.className = 'domEvents';

const domEventsHeading = document.createElement('h2');
domEventsHeading.textContent = 'DOM Events';

const domEventsButton = document.createElement('button');
domEventsButton.textContent = 'What are DOM events?';
domEventsButton.onclick = () =>
{
    alert('DOM events are all user interactions that happen on the webpage. Some examples include clicking, scrolling, or typing.');
}

domTree.appendChild(domTreeHeading);
domTree.appendChild(buttonDomTree);

modal.appendChild(modalImage);
modal.appendChild(closeModal);

elementSelectors.appendChild(elementSelectorsHeading);
elementSelectors.appendChild(paragraphAboutWays);
elementSelectors.appendChild(buttonShowWays);
elementSelectors.appendChild(overlay);
elementSelectors.appendChild(modal);

domEvents.appendChild(domEventsHeading);
domEvents.appendChild(domEventsButton);

moduleC.appendChild(heading);
moduleC.appendChild(meaningOfDom);
moduleC.appendChild(buttonWhatIsDom);

moduleC.appendChild(domTree);
moduleC.appendChild(elementSelectors);
moduleC.appendChild(domEvents);

body.appendChild(moduleC);
