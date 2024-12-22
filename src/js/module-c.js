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
buttonDomTree.textContent = 'What do you mean by DOM tree';
buttonDomTree.onclick = () => {
    alert('The DOM tree basically starts at the root(window), with everything JavaScript inside it.')
}

moduleC.appendChild(heading);
moduleC.appendChild(paragraph);
moduleC.appendChild(buttonWhatIsDom);
moduleC.appendChild(domTreeHeading);
moduleC.appendChild(buttonDomTree);

body.appendChild(moduleC);
