//Changing the body using Sequential and Parallel requests
//You can comment one part to watch the other one
//The logic is slightly different


function changeColor(color,delay){
	return new Promise((resolve,reject)=>{
	setTimeout(() => {
		document.body.style.backgroundColor = color
		resolve();
			
	}, delay)	
	});
	
}

//Sequential requests
async function changeBody(){
	await changeColor('blue',1000)
	await changeColor('red',1000)
	await changeColor('green',1000)
	await changeColor('yellow',1000)
}

//parallel requests
async function changeBody(){
	const prom1 = changeColor('blue',1000)
	const prom2 = changeColor('red',1000)
	const prom3 = changeColor('green',1000)
	const prom4 = changeColor('yellow',1000)

	await prom1
	await prom2
	await prom3
	await prom4
}

changeBody()
