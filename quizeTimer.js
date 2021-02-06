let setTime = new Date().setTime(0);
let time = 0;
setInterval(()=>{
	time++;
	console.log(setTime)
},1000);