const body = document.body;

const aboutDiv = document.createElement('div');
aboutDiv.className = 'about';

const heading = document.createElement('h1');
heading.textContent = 'Learning JavaScript with Guanabara';

const paragraph = document.createElement('p');
paragraph.textContent = 'This course is designed to teach you the fundamentals of JavaScript. It will cover topics like variables, data types, operators, conditionals, loops, functions, and objects.';

const button = document.createElement('button');
button.id = 'moveToModules';
button.textContent = 'Move to Modules';

aboutDiv.appendChild(heading);
aboutDiv.appendChild(paragraph);
aboutDiv.appendChild(button);

body.appendChild(aboutDiv);

document.getElementById("moveToModules").addEventListener("click", function() {
    window.location.href = "./src/pages/modules.html";
});