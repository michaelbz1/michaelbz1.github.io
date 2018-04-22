'use strict';

var colors = ['#C94C24', //orange
'#268BD2', //blue
'#C4226F', //pink
'#859835', // lime
'#6D73C2', // purple
'#37A198', // green
'#DA3637', //red
'#F0AD4E' //yellow
];

var students = ['Sally', //orange
'Bill', //blue
'Penelope Ann', //pink
'Ralph', // lime
'Chuck', // purple
'Susan', // green
'Mickey', //red
'Pooh' //yellow
];

function makeBoxes(howMany) {
  var colorAmt = colors.length;
  var currColor = 0;
  var myElement;
  var myNode = document.querySelector('.boxes');

  for (var i = 0; i < howMany; i++) {

    myElement = document.createElement('div'); 
    myElement.className = 'box';
    myElement.style = 'background-color: ' + colors[currColor];

    //var h = document.createElement("H1");
    //var t = document.createTextNode("Hello World");
    //h.appendChild(t);
    myNode.appendChild(myElement);

    myElement.innerHTML = "<h1>"+students[i]+"</h1>";



    if (currColor === colorAmt - 1) {
      currColor = 0;
    } else {
      currColor++;
    }
  }

  myNode.addEventListener('click', function (e) {
    e.target.parentNode.removeChild(e.target);
  }, false);
}

var students_total = students.length;
makeBoxes(students_total);
//# sourceMappingURL=script.js.map
