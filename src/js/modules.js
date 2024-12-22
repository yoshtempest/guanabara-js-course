const body = document.body;

const modulesContainer = document.createElement('div');
modulesContainer.className ='modules-container';

const heading = document.createElement('h1');
heading.textContent = 'Select which module you want to see';

const buttonA = document.createElement('button');
buttonA.textContent = 'Module A';
buttonA.id = 'moveTOA'

const buttonB = document.createElement('button');
buttonB.textContent = 'Module B';
buttonB.id = 'moveToB'

const buttonC = document.createElement('button');
buttonC.textContent = 'Module C';
buttonC.id = 'moveToC'

modulesContainer.appendChild(heading);
modulesContainer.appendChild(buttonA);
modulesContainer.appendChild(buttonB);
modulesContainer.appendChild(buttonC);

body.appendChild(modulesContainer);

document.getElementById("moveToC").addEventListener("click", function() {
    window.location.href = "../pages/module-c.html";
});