const CROSS = 'fas fa-times';
const CIRCLE = 'far fa-circle';
let isCross = true;
const Border = [
	[undefined, undefined, undefined],
	[undefined, undefined, undefined],
	[undefined, undefined, undefined]
];
const Masks = [
	[[1, 1, 1], [undefined, undefined, undefined], [undefined, undefined, undefined]],
	[[undefined, undefined, undefined], [1, 1, 1], [undefined, undefined, undefined]],
	[[undefined, undefined, undefined],[undefined, undefined, undefined], [1, 1, 1]],
	[[1, undefined, undefined], [1, undefined, undefined], [1, undefined, undefined]],
	[[undefined, 1, undefined], [undefined, 1, undefined], [undefined, 1, undefined]],
	[[undefined, undefined, 1], [undefined, undefined, 1], [undefined, undefined, 1]],
	[[1, undefined, undefined], [undefined, 1, undefined], [undefined, undefined, 1]],
	[[undefined, undefined, 1], [undefined, 1, undefined], [1, undefined, undefined]],
]
document.querySelector('#btn').onclick = function reload(){
	location.reload();
}

const sendToModal = (message) => {
	const modal = document.getElementsByClassName('modal')[0];
	const text = document.querySelector('#text');
	modal.classList.add('active');
	text.innerText = message;
}
const draw = () => {
	let switcher = false;
	for(let i = 0; i < 3; i++){
		for(let j = 0; j < 3; j++){
			if(Border[i][j] === undefined){
				switcher = true;
			}
		}
	}
	if(!switcher){
		sendToModal("It's draw go again");
	}
}
const checkMask = () => {
	Masks.forEach(mask => {
	  let newBorder = [...Border];
	  for(let k = 0; k < 3; k++){
	  	newBorder[k] = [...Border[k]];
	  }	
	  let counter = '';
	  for(let i = 0; i < 3; i++){
	  	for(let j = 0; j < 3; j++){
	  		if(mask[i][j] === undefined){
	  			newBorder[i][j] = undefined;
	  		}
	  		if(newBorder[i][j] !== undefined){
	  			counter += String(newBorder[i][j]);
	  		}
	  	}
	  }
	  if(counter === '111'){
	  	sendToModal('Cross win!!!');
	  } else if(counter === '000'){
	  	sendToModal('Circle win!!!');
	  }

	})
}
const writeInBorder = (target, isCross) => {
	let position = target.id;
	Border[Number(position[0])][Number(position[1])] = isCross ? 1 : 0;
}
const createAntemplate = (event, template) => {
		if(event.target.classList[0] === 'border_col' && !event.target.children[0].classList.length){
			const i = event.target.children[0];
			writeInBorder(event.target.children[0], isCross);
			checkMask();
			i.classList = template;
			draw();
			isCross = !isCross;
		}
}
document.onclick = function switchTemplate(e) {
	isCross ? createAntemplate(e, CROSS) : createAntemplate(e, CIRCLE);
	
}