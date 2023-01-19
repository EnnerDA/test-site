alert('Ну во-первых, знаете ли, Hello!');
var myHeading = document.querySelector('#h1-2');
myHeading.textContent = 'The end!';


var lama = document.querySelector('#p-2');

/*
document.querySelector('img').onclick = function() {
	alert(lama.textContent)
	lama.textContent = 'Да я  Лама!';
}

*/

/*

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images\llama-emoji-clipart-md.png') {
      myImage.setAttribute ('src','images\llama-emoji-clipart-md(1).png');
    } else {
      myImage.setAttribute ('src','images\llama-emoji-clipart-md.png');
    }
}

*/

document.querySelector('img').onclick = function() {
	if(lama.textContent === 'Да я супер Лама!') {
		lama.textContent = 'Да я Лама!';
	} else {
		lama.textContent = 'Да я супер Лама!';
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Эй ' + myName;
}


myButton.onclick = function() {
  setUserName();
}

