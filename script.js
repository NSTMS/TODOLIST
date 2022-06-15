let allElements = []

function loadElements()
{
    const arrLength = window.localStorage.getItem("length")
    if(arrLength > 0)
    {
        let tab = window.localStorage.getItem("elements").split(",")
        for(let i=0;i<arrLength;i++)
        {
            addListElement(tab[i])
        }
    }
}





addEventListener("keydown",decectKey)
function decectKey(event)
{
   let text = document.getElementById("taskContent").value

    if(event.key == "Enter")
    {
            addListElement(text)
    }
}


let counter = 0
function addListElement(text)
{
    if(text.length < 126)
    {
        if(text != ""){

            // let itemTitle = document.createElement("div")
            // itemTitle.classList.add("itemTitle")
            // itemTitle.innerHTML = `<p>${counter}</p>`
            // newItem.appendChild(itemTitle)
    
            let newItem = document.createElement("div")
            let itemContent = document.createElement("div")        
            let minus = document.createElement("div")
            
            newItem.classList.add("listItem")
    
            counter++
            newItem.classList.add(`item-${counter}`)
            itemContent.classList.add("itemContent")
    
           
            itemContent.innerHTML = `<p onclick="taskDone(${counter})" class="task-${counter} task">${text}</p>`
            document.getElementById("taskContent").value = ""
            minus.innerHTML = `<img src="https://icons-for-free.com/download-icon-minus+reduce+subtract+icon-1320085760528603434_512.png" alt="minus" onclick="removeElement(${counter})">`
            itemContent.appendChild(minus)
    
            allElements.push(text)
            // console.log(allElements)
            newItem.appendChild(itemContent)
            document.querySelector(".list").appendChild(newItem)
        }
    }else{
        alert("Za długi teskt!")
        document.getElementById("taskContent").value = ""
    }
    
}

function deleteLastElement()
{
    let listItemArray = document.querySelectorAll(".listItem")
    Array.prototype.forEach.call( listItemArray, function( node ) {
        node.parentNode.removeChild( node );
    });

    console.log(allElements)
    allElements.length = 0
    counter = 0
}
function removeElement(position)
{
    let element = document.querySelector(`.item-${position}`)
    const elementChild = document.querySelector(".itemContent")
    const index = allElements.indexOf(elementChild.querySelector(".task").textContent)
    allElements.splice(index,1)
    element.remove()
}

function taskDone(i)
{
    document.querySelector(`.task-${i}`).classList.toggle("complete")
}
window.addEventListener("beforeunload", function () {
    console.log("nauraa")
    window.localStorage.setItem("elements",allElements)
    window.localStorage.setItem("length",allElements.length)
});