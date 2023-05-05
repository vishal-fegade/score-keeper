let p1Score=0;
let p2Score=0;
let finalscore=3;

let select=document.querySelector("#Round-select");

const resetGame=()=>{
	p1Score=0;
	p2Score=0;
	p1Btn.disabled=false;
	p2Btn.disabled=false;
	p1Text.style.color="black";
	p2Text.style.color="black";
	p1Text.innerText = `${p1Score}`;
    p2Text.innerText = `${p2Score}`;

}

select.addEventListener('change' ,() =>{

	 finalscore=parseInt(select.value)
	 resetGame();
	
})

let p1Btn=document.querySelector(".p1-btn");
let p1Text=document.querySelector(".p1-text");

p1Btn.addEventListener('click', ()=>{
	if(p1Score!=finalscore){
	 p1Score+=1;
	 p1Text.innerText = `${p1Score}`;
	}
	if(p1Score==finalscore){
		p1Text.style.color="green";
		p2Text.style.color="red";
		p1Btn.disabled=true;
		p2Btn.disabled=true;
		
	}
});

let p2Btn=document.querySelector(".p2-btn");
let p2Text=document.querySelector(".p2-text");


p2Btn.addEventListener('click', ()=>{
	if(p2Score!=finalscore){
		p2Score+=1;
		p2Text.innerText = `${p2Score}`;
	   }
	   if(p2Score==finalscore){
		   p2Text.style.color="green";
		   p1Text.style.color="red";
		   p2Btn.disabled=true;
		   p1Btn.disabled=true;
	   }
});


let reset=document.querySelector(".reset-btn");

reset.addEventListener('click', ()=>{
	resetGame();
})