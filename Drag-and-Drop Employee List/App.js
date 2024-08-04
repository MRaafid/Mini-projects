const allEmployees = document.querySelector('.all-employees');
const taskForce = document.querySelector('.task-force');
const employeeCards = document.querySelectorAll('.employee');
const { top, left } = allEmployees.getBoundingClientRect();

const nameTag = (x,y,name) => {
  let newName = document.createElement('div');
  newName.setAttribute('class','info-panel')
  newName.innerText = name;
  newName.style.top =`${y}px `
  newName.style.left =`${x}px`
  return newName;
};

const remove = () => {
  let addedElemet = document.querySelector('.info-panel');
  addedElemet?.remove();
};

allEmployees.addEventListener('contextmenu',(event) =>{
  remove();
  event.preventDefault();
  if(event.target.getAttribute('class') === 'employee')
    {
      let name = event.target.getAttribute('data-name');
      const infoPanel = nameTag(event.clientX-left,event.clientY-top,name);
      allEmployees.append(infoPanel);
    }
});

allEmployees.addEventListener('click',(event) => {remove();});

//drag and drop
employeeCards.forEach(element => {
  element.setAttribute('draggable','true');
});

allEmployees.addEventListener('dragstart',(event) =>{
  remove();
  const item = event.target.getAttribute('data-id')
  event.dataTransfer.setData('text/html', item)
});

taskForce.addEventListener('dragenter',(event) =>{
  event.preventDefault();
  event.currentTarget.classList.add('highlight-drop')
});
taskForce.addEventListener('dragleave',(event) =>{
  event.preventDefault();
  event.currentTarget.classList.remove('highlight-drop')
});

taskForce.addEventListener('drop', (event) => {
  event.preventDefault();
  const itemId = event.dataTransfer.getData('text/html');
  const addItem = document.querySelector(`[data-id='${itemId}']`);
  event.currentTarget.classList.remove('highlight-drop');
  taskForce.appendChild(addItem);
});

taskForce.addEventListener('dragover',(event) =>{
  event.preventDefault();
});

// from taskForce
taskForce.addEventListener('dragstart', (event) => {
  remove(); 
  const item = event.target.getAttribute('data-id');
  event.dataTransfer.setData('text/html', item);
});

allEmployees.addEventListener('dragenter',(event) =>{
  event.preventDefault();
  event.currentTarget.classList.add('highlight-drop')
});
allEmployees.addEventListener('dragleave',(event) =>{
  event.preventDefault();
  event.currentTarget.classList.remove('highlight-drop')
});

allEmployees.addEventListener('drop', (event) => {
  event.preventDefault();
  const itemId = event.dataTransfer.getData('text/html');
  const addItem = document.querySelector(`[data-id='${itemId}']`);
  event.currentTarget.classList.remove('highlight-drop');
  allEmployees.appendChild(addItem);
});

allEmployees.addEventListener('dragover',(event) =>{
  event.preventDefault();
});

