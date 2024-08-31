let clickedIcon = document.getElementsByClassName("share-icon");

let expandedView = document.getElementsByClassName("share-expand");


clickedIcon.addEventListener("click", function(){
    expandedView.classList.toggle("active")
})