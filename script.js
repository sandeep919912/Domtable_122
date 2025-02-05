let btn = document.getElementById('btn');
let inputArea = document.getElementById("inputVal");
let listContainer = document.querySelector("#ulContainer");

function addTask(){
    if(inputArea.value === ''){
        alert("please enter your task")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputArea.value;
        listContainer.appendChild(li)
        li.style.cursor = "pointer"
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputArea.value = ""
    saveData()
}

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function setData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

setData()

