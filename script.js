
// 1 
var ou = document.querySelector("footer");

console.log(ou)

var number_time = 0

var onClick = function() {
number_time++;
console.log("CLIQUEEEE numéro " + number_time)  };

ou.addEventListener("click", onClick);

//2
let btn = document.querySelector(".navbar-toggler")
let u = document.querySelector(".collapse");

var BBB = function() {
	u.classList.toggle("collapse");
};

btn.addEventListener("click", BBB);

//3
let card = document.getElementsByClassName('col-md-4')[0];
let text = card.querySelector(".card-text");
let edit = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0];

var ululu = function() {
	text.style.color = 'red'
}

edit.addEventListener("click", ululu);

//4 
let card2 = document.getElementsByClassName('col-md-4')[1];
let text2 = card2.querySelector(".card-text");
let edit2 = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[1];
let status2 = false

var ululu2 = function() {
	if (status2 == false) {
	text2.style.color = 'green';
	status2 = true;
	}
	else if (status2 == true){
	text2.style.color = '';
	status2 = false;
	}
}

edit2.addEventListener("click", ululu2);

//5

let navbar = document.getElementsByClassName('navbar navbar-dark bg-dark box-shadow')[0];
console.log(navbar)

let CDN = document.getElementsByTagName("link")[0];
console.log(CDN)

let head = document.getElementsByTagName("head")[0];
console.log(head)

let all = document.getElementsByTagName("body")[0];
console.log(all)

let status3 = false

var ululu3 = function() {
	if (status3 == false) {
	CDN.href = "";
	status3 = true;
	}
}

var ululu4 = function() {
	if (status3 == true) {
    CDN.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    status3 = false;
	}
}

navbar.addEventListener("dblclick", ululu3);
all.addEventListener("click", ululu4);

























