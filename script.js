let todo = [
    {title: 'Title from array',
     desc: 'description from array'},
    {title: 'Title 2 from array',
     desc: 'description 2 from array'},
]

let items = []
let doneItems = []

let lista = document.querySelector('.todo-list')
let doneList = document.querySelector('.done-list')
let toast = document.querySelector('.toast')

function Create(){
    let ititle = document.querySelector('.todo-create #title').value
    let idesc = document.querySelector('.todo-create #description').value

    if(ititle == ''){
        animateNotification('Empty Title','red')
    }else if(idesc == ''){
        animateNotification('Empty Description','red')
    }else{
        items.unshift ({title: ititle, desc: idesc})
        Update()
        animateNotification('Task Succesfully Added!','green')
    }
    
}


function animateNotification(x,c){
        toast.innerHTML = x
        toast.style.backgroundColor = c
        toast.style.bottom = '10px'
    setTimeout(() => {
        toast.style.bottom = '-40px'
    }, 2500);
}



function Update(){
    lista.innerHTML = ''
    for (let i = 0; i < items.length; i++) {
        lista.innerHTML +=
            `<div class="todo-item">
        <div class="todo-item-top">
            <p class="title">${items[i].title}</p>
            <button onclick='Remove(${i})' class="btnDone">Task Done</button>
        </div>
        <p class="description">${items[i].desc}</p>
    </div>` 
    }
    document.querySelector('.todo-create #title').value = ''
    document.querySelector('.todo-create #description').value = ''
}

function Remove(x){
    doneItems.unshift(items[x])
    updateDoneItems()
    items.splice(x, 1)
    Update()
}

function undo(x){
    items.unshift(doneItems[x])
    doneItems.splice(x,1)
    Update()
    updateDoneItems()
}

function updateDoneItems(){
    doneList.innerHTML = ''
    for (let i = 0; i < doneItems.length; i++) {
        doneList.innerHTML += `
        <div class="done-item">
            <div class="done-item-top">
                    <p class="title">${doneItems[i].title}</p>
                    <img title="Undo" onclick="undo(${i})" src='http://simpleicon.com/wp-content/uploads/undo-6.png' class="undoImg"></img>
                </div>
            <p class="description">${doneItems[i].desc}</p>
        </div>`
    }
}




