let countEl = document.getElementById("count-el") //pass an argument
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr //can replace innerText w/ textContent which respects spaces
    console.log(count)
    countEl.textContent = 0 //textContent sets text back to zero when save() fucntion is executed
    count = 0 //sets count back to zero when save() function is executed *don't need let not declaring new variables 
}
