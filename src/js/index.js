const itemsPerguntasERespostas = document.querySelectorAll(".item");

itemsPerguntasERespostas.forEach((item) => {
    item.addEventListener("click", function() {
        const itemSelected = document.querySelector(".selected");
        
        if(itemSelected) {
            itemSelected.classList.remove("selected");
        } else {
        item.classList.add("selected");
        }
    })
})

