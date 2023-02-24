//your code here
let addTodoBtn = document.getElementById("addTodoBtn");
addTodoBtn.addEventListener("click",()=>{
	let newTodoInput = document.getElementById("newTodoInput").value;
	if(newTodoInput !== ""){
		document.getElementById("list").innerHTML = newTodoInput;
	}
})
