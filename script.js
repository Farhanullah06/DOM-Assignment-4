let paragraph = document.getElementById("para");
let addBtn = document.getElementById("taskOneBtn");
// Task 1 start
addBtn.addEventListener('click', () => {
    paragraph.classList.add('highlight');
});
// Task 1 End

// Task 2 Start
let removeBtn = document.getElementById('tasktwoBtn');
removeBtn.addEventListener('click', () => {
    paragraph.classList.remove('highlight');
});
// Task 2 End

//tas 3 start
let toggleBtn = document.getElementById("Toggle");

toggleBtn.addEventListener("click", () => {
    paragraph.classList.toggle("highlight")
})
//tas 3 ENd

//Task 4 start
let checking = document.getElementById("Check");
checking.addEventListener("click", () => {
    if (paragraph.classList.contains("highlight")) {
        alert("Class is Already exists");
    } else {
        alert("Class is not exists");
    }
});
//Task 4 End

//Task 5 Start
let actived = document.getElementById("active");

actived.addEventListener("click" , ()=>{
    actived.classList.toggle("active0-Btn")
})
//Task 5 End

//Task 6 Start
let bgModeChanged = document.getElementById("ModeChg")
bgModeChanged.addEventListener("click" , ()=>{
    document.body.classList.toggle("dark-mode");
    // bgModeChanged.innerText = "White Mode"
})
//Task 6 End