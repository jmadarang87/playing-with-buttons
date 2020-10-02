const toggleButton = document.querySelector('button.toggleButton');
const listDiv = document.querySelector('div.listDiv');
const descriptionInput = document.querySelector('input.descriptionInput');
const p = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.descriptionButton');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

// Creates 'Up' button
function upButton(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Move Me Up!';
  li.appendChild(up);
}

// Creates 'Down' button
function downButton(li) {
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Move Me Down!';
  li.appendChild(down);
}

// Creates 'Remove' button
function removeButton(li) {
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove Me!';
  li.appendChild(remove);
}

// Clears all buttons from list
function clearButtons() {
  for ( let i = 0; i < lis.length; i++ )
    while (lis[i].lastElementChild) {
      lis[i].removeChild( lis[i].lastElementChild );
    }
}

// Adds buttons to all existing list items and removes 'Up' button from the firstElementChild and 'Down' button from the lastElementchild.
function setButtons() {
  for ( let i = 0; i < lis.length; i++ ) {
    upButton(lis[i]);
    downButton(lis[i]);
    removeButton(lis[i]);
  } listUl.lastElementChild.removeChild( listUl.lastElementChild.children[1] );
    lis[0].removeChild(lis[0].firstElementChild);
} 

// Clears background color for all line items and resets first and last elements background colors appropriately.
function resetBackgroundColor() {
  for ( let i = 0; i < lis.length; i++ ) {
      lis[i].style.backgroundColor = '';
    }
     listUl.firstElementChild.style.backgroundColor = '#d0a6df';
     listUl.lastElementChild.style.backgroundColor = '#b33ddd';
}

// 'Up', 'Down' and 'Remove click event listener.
listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  } 
    clearButtons();
    setButtons();
    resetBackgroundColor()
})

// 'Hide List!!' click event listener. Toggles listDiv.
toggleButton.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
  listDiv.style.display = 'block';
  toggleButton.textContent = 'Hide List';
} else {
  listDiv.style.display = 'none';
  toggleButton.textContent = 'Show List';
}                          
})

// 'Change List Description!' event listener. Updates heading with descriptionInput and clears textbox.
descriptionButton.addEventListener('click', () => {
  p.innerHTML = descriptionInput.value + `:`;
  descriptionInput.value = '';                        
})

// 'Add Item!!' event listener. Adds addItemUnput to list and clears textbox.
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  clearButtons();
  setButtons();
  resetBackgroundColor()
  addItemInput.value = '';                        
})

// Highlights first and last line items and sets buttons at first page load.
firstListItem.style.backgroundColor = '#d0a6df';
lastListItem.style.backgroundColor = '#b33ddd';
setButtons();

