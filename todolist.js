const addButton = document.getElementById('liveToastBtn');
const inputText = document.getElementById('task');
const todoList = document.getElementById('list');
const removeBtn = document.getElementById('list');
let data = localStorage.getItem("task")
addButton.addEventListener("click", addBtn)
todoList.addEventListener("submit", listHolder)


//removeBtn.addEventListener("click", clearBtn)

function addBtn(event){
    event.preventDefault()
    if(task.value == "" || !task.value.trim() ) {
        $(`.error`).toast("show")
    }
    else{
        $(`.success`).toast("show")
        listHolder(inputText.value)
        //inputText.value = ""
        
        
    }
    
    
    
}
function listHolder (task){
    let liDOM = document.createElement("li")
    liDOM.innerHTML =  `${task}`
    todoList.append(liDOM)
    
    document.getElementById("task").value = "";
    
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    liDOM.appendChild(span);

    let close = document.getElementsByClassName("close");

    for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
    
}

}


let myNodeList = document.getElementsByTagName("li")
for (let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

let todo = document.querySelector("ul") 
todo.addEventListener("click",function(event){
    if ( event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        // console.log(event.target.tagName)
    }
},false );

      
