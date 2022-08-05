// Write your code here!
// remove DOM 'main' node 
const main = document.getElementById("main");
main.remove();

//create newHeader variable pointing to 'h1'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

//add the element as a child
document.body.appendChild(newHeader);

//add content to the node
newHeader.innerHTML = "Linus is the champion";