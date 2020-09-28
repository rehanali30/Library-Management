document.getElementById('extc').parentNode.style.borderRadius = '10px';
document.getElementById('etrx').parentNode.style.borderRadius = '10px';

var navItem = document.querySelectorAll('.nav-item');
var navName = document.querySelectorAll('.nav-item>a');
var dropdown = document.createElement('ul');
dropdown.id = 'dropdown';
var semCount = 0;
for (var i=0; i<=1; i++) {
    var dropdownItem = document.createElement('li');
    dropdownItem.className = 'dropitem';
    for (var j=1; j<=4; j++) {
        var menuItem = document.createElement('a');
        menuItem.className = 'menuitem';
        menuItem.setAttribute('href', './semester.html')
        semCount++;
        var sem = document.createTextNode('Semester '+ semCount);
        menuItem.appendChild(sem);
        dropdownItem.appendChild(menuItem);
    }
    dropdown.appendChild(dropdownItem);
}

function showNav(selectedItem) {
    navItem[selectedItem].appendChild(dropdown);
    dropdown.style.cssText = 'opacity: 0; visibility: hidden;'
    update(dropdown);
    setTimeout(() => dropdown.style.cssText = 'opacity: 1; visibility: visible;', 5);
    dropdown.parentNode.addEventListener('mouseleave', hideNav);
}
function hideNav() { update(dropdown); setTimeout(() => dropdown.style.cssText = 'opacity: 0; visibility: hidden;', 20); }
for (let i=0; i<navItem.length; i++){ navName[i].addEventListener('mouseover', () => showNav(i)); }

function toggleNotification() {
    var notification = document.getElementById('notification');
    var visibility = notification.style.visibility;
    var msgIcon = document.getElementById('msg-icon');
    if (visibility == 'visible') {
        notification.style.cssText = 'opacity: 0; visibility: hidden;';
        msgIcon.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }
    else {
        notification.style.cssText = 'opacity: 1; visibility: visible;'
        msgIcon.style.backgroundColor = 'rgb(29, 151, 231)';
    }
}

function update(element) {
    window.getComputedStyle(element).opacity;
    window.getComputedStyle(element).visibility;
    window.getComputedStyle(element).transition;
}



