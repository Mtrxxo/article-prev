let clickedIcon = document.querySelector(".icon-div");

let expandedView = document.querySelector(".share-expand");

let closeExpand = document.querySelector(".i-span");

let secondShare = document.querySelector(".i-span_two")

clickedIcon.addEventListener("click", function(){
    expandedView.classList.toggle("active")

    if (expandedView.classList.contains("active")){
        clickedIcon.style.backgroundColor = "#48556a"
        secondShare.style.color = "#fff"
    }else{
        clickedIcon.style.backgroundColor = "#ecf2f8"
        secondShare.style.color = "#48556a"
    }
})

closeExpand.addEventListener("click", function(){
    if (expandedView.classList.contains("active")){
        expandedView.classList.remove("active")
    }else{
        expandedView.classList.add("active")
    }
})