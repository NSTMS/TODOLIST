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
    
           
            itemContent.innerHTML = `<p onclick="taskDone(${counter})" class="task-${counter}">${text}</p>`
            document.getElementById("taskContent").value = ""
            minus.innerHTML = `<img src="https://icons-for-free.com/download-icon-minus+reduce+subtract+icon-1320085760528603434_512.png" alt="minus" onclick="removeElement(${counter})">`
            itemContent.appendChild(minus)
    
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
    console.log(listItemArray)
    Array.prototype.forEach.call( element, function( node ) {
        node.parentNode.removeChild( node );
    });
}
function removeElement(position)
{
    let element = document.querySelector(`.item-${position}`)
    element.remove()
}

function taskDone(i)
{
    document.querySelector(`.task-${i}`).classList.toggle("complete")
}