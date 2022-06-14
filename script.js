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

       
        itemContent.innerHTML = `<p>${text}</p>`
        document.getElementById("taskContent").value = ""
        minus.innerHTML = `<img src="https://cdn-icons.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1655194918~hmac=2797fed9bd102d40f4d0057bd3bc05bag" alt="minus" onclick="removeElement(${counter})">`
        itemContent.appendChild(minus)

        newItem.appendChild(itemContent)
        document.querySelector(".list").appendChild(newItem)
    }
}

function deleteLastElement()
{
   let listItemArray = document.getElementsByClassName("listItem")
    if(listItemArray.length != 0)
    {
        console.log("usun")
        listItemArray[length].remove()
    }
}
function removeElement(position)
{
    let element = document.querySelector(`.item-${position}`)
    element.remove()
}
