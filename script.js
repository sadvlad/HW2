// TODO(you): Write the JavaScript necessary to complete the homework.

let data1 = null; 
let data2 = null; 
let data3 = null;
let text = null; 
let contents = null; 
const h1 = document.querySelector('section.results h1'); 
const p = document.querySelector('section.results p'); 

function onClick(event){
const container = event.currentTarget;
if (container.matches('.choice-grid div[data-question-id="one"')){ 
	for (const box of gridDiv1){ 
	if (box !== container){ 
	const image = box.querySelector('.checkbox'); 
	image.src = 'images/unchecked.png';
	box.style.opacity = 0.6; 
	box.style.backgroundColor = '#f4f4f4';
} 
else {
	const image = box.querySelector('.checkbox'); 
	image.src = 'images/checked.png'; 
	box.style.opacity = 1; 
	box.style.backgroundColor = '#cfe3ff'; 
}
}
} 
else if (container.matches('.choice-grid div[data-question-id="two"')){ 
	for (const box of gridDiv2){
	if (box !== container){
	const image = box.querySelector('.checkbox');
	image.src = 'images/unchecked.png'; 
	box.style.opacity = 0.6;
	box.style.backgroundColor = '#f4f4f4';
} 
else {
	const image = box.querySelector('.checkbox');
	image.src = 'images/checked.png'; 
	box.style.opacity = 1;
	box.style.backgroundColor = '#cfe3ff';
}
}
} 
else if (container.matches('.choice-grid div[data-question-id="three"')){
	for (const box of gridDiv3){
	if (box !== container){
	const image = box.querySelector('.checkbox');
	image.src = 'images/unchecked.png'; 
	box.style.opacity = 0.6;
	box.style.backgroundColor = '#f4f4f4';
} 
else {
	const image = box.querySelector('.checkbox');
	image.src = 'images/checked.png'; 
	box.style.opacity = 1;
	box.style.backgroundColor = '#cfe3ff';
}
}
}
if (container.matches('.choice-grid div[data-question-id="one"')){ 
data1 = container.dataset.choiceId
} 
else if (container.matches('.choice-grid div[data-question-id="two"')){
data2 = container.dataset.choiceId
}
 else if (container.matches('.choice-grid div[data-question-id="three"')){
data3 = container.dataset.choiceId
} 

if(data1 !== null && data2 !== null && data3 !== null){ 
	if (data1 === data2){ 
	title = RESULTS_MAP[data1]['title'];
	contents = RESULTS_MAP[data1]['contents'];
	h1.textContent = ("You got: " + title);
	p.textContent = contents;
	const restart = document.querySelector('section div#restart');
	restart.classList.add('hidden');
	restart.classList.remove('hidden');			
	}
	else if (data2 === data3){
	title = RESULTS_MAP[data2]['title'];
	contents = RESULTS_MAP[data2]['contents'];
	h1.textContent = ("You got: " + title);
	p.textContent = contents;
	const restart = document.querySelector('section div#restart');
	restart.classList.add('hidden');
	restart.classList.remove('hidden');
	}
	else if (data1 === data3){
	title = RESULTS_MAP[data3]['title'];
	contents = RESULTS_MAP[data3]['contents'];
	h1.textContent = ("You got: " + title);
	p.textContent = contents;
	const restart = document.querySelector('section div#restart');
	restart.classList.add('hidden');
	restart.classList.remove('hidden');
	}
	else if (data1 !== data2 && data1 !== data3 && data2 !== data3) {
	title = RESULTS_MAP[data1]['title'];
	contents = RESULTS_MAP[data1]['contents'];
	h1.textContent = ("You got: " + title);
	p.textContent = contents;
	const restart = document.querySelector('section div#restart');
	restart.classList.add('hidden');
	restart.classList.remove('hidden');		
	}
const allContainer = document.querySelectorAll('.choice-grid div');
	for (const item of allContainer) {
	item.removeEventListener('click', onClick);
	}
	if(container === restartButton){		
		for (const item of allContainer) {
		item.style.opacity = 1;
		item.style.backgroundColor = '#f4f4f4';
		item.addEventListener('click', onClick); 
		const image = item.querySelector('.checkbox'); 
		image.src = 'images/unchecked.png';
		restart.classList.add('hidden');
		h1.textContent = null; 
		p.textContent = null; 
		}
data1 = null;
data2 = null;
data3 = null;
const pickUp = document.querySelector('section.question-name');
pickUp.scrollIntoView(); 			
}
}
}
const gridDiv1 = document.querySelectorAll('.choice-grid div[data-question-id="one"]'); 
for (const item of gridDiv1) {
  item.addEventListener('click', onClick);
}
const gridDiv2 = document.querySelectorAll('.choice-grid div[data-question-id="two"]');
for (const item of gridDiv2) {
  item.addEventListener('click', onClick);
}
const gridDiv3 = document.querySelectorAll('.choice-grid div[data-question-id="three"]');
for (const item of gridDiv3) {
  item.addEventListener('click', onClick);
}
const restartButton = document.querySelector('div.hidden');
restartButton.addEventListener('click', onClick);


// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
